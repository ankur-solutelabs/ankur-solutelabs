import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/task/entities/task.entity';
import { TaskService } from 'src/task/task.service';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository:Repository<Employee> ,
    private taskService: TaskService
    ) {}

    async findAll() :Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    async findOne(id:number) :Promise<Employee> {
        return this.employeeRepository.findOne(id)
    }


    async create(employee: CreateEmployeeDto) :Promise<Employee> {
        const emp = this.employeeRepository.create(employee)
        return this.employeeRepository.save(emp)

    }

    async getTask(id:number):Promise<Task> {
        return this.taskService.findOne(id)
    }

}
