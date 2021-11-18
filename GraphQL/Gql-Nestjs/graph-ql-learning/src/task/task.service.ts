import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}

  create(createTaskInput: CreateTaskInput):Promise<Task> {
    const tas = this.taskRepository.create(createTaskInput)
    return this.taskRepository.save(tas)
  }

 async findAll() :Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: number):Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    // return this.taskRepository.update();
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
