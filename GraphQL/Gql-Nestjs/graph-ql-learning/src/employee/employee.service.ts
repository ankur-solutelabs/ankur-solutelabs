import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee>) {}

    async findAll() :Promise<Employee[]> {
        return this.employeeRepository.find();
    }


    create(employee: CreateEmployeeDto) :Promise<Employee> {
        const emp = this.employeeRepository.create(employee)
        return this.employeeRepository.save(emp)

    }

}
