import { Resolver,Query, Mutation, Args, ResolveField, Parent} from '@nestjs/graphql';
import { Task } from 'src/task/entities/task.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {

    constructor(private employeeService: EmployeeService){}

    @Query(()=>[Employee],{name:"getAllEmployees"})
    findAll() {
        return this.employeeService.findAll();
    }

    @Mutation(() => Employee, {name: "createEmployee"})
    create(@Args('employee') employee:CreateEmployeeDto ) {
        return this.employeeService.create(employee)
    }

    @Query(() => Employee) 
    findOne(@Args("id") id:number) {
        return this.employeeService.findOne(id)

    }

    @ResolveField(() => Task)
    task(@Parent() employee:Employee){
        return this.employeeService.getTask(employee.taskId)

    }
}
