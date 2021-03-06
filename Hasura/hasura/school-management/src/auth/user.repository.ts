import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import {EntityRepository,Repository} from "typeorm";
import { AuthCredentialDto } from "./dto/auth-crendentials.dto";
import {User} from "./user.entity"
import * as bcrypt from 'bcrypt';
 

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredentialDto: AuthCredentialDto):Promise<void> {
        const {username,password} = authCredentialDto;

        // const salt = await bcrypt.genSalt();
        // console.log(salt)
        
        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();;
        user.password = await this.hashedPassword(password,user.salt);

        try { 

            await user.save();
            
        } catch (error) {
           // console.log(error.code)
           if(error.code === '23505') {
               throw new ConflictException('Username Already Exists');
           } else {
               throw new InternalServerErrorException();
           }
            
        }
    
    }
    async validateUserPassword(authCredentialDto: AuthCredentialDto):Promise<string>{
        const {username,password} = authCredentialDto;
        const user = await this.findOne({username});

        if(user && await user.validatePassword(password) ){
            return user.username;
        }else {
            return null;
        }

    }



    private async hashedPassword(password: string, salt: string):Promise<string> {
        return bcrypt.hash(password,salt)
    }
  
}