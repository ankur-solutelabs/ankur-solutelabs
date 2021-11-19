import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.taskRepository.find({
      relations: ["employee"]
    });
  }

  async findOne(id: number):Promise<Task> {
    return this.taskRepository.findOne(id,{relations:["employee"]});
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    const task:Task = this.taskRepository.create(updateTaskInput)
    task.id = id;
    return this.taskRepository.save(task)
  }
  async remove(id: number) {
    let rmtask = this.findOne(id)
    if (rmtask) {
      let ret = await this.taskRepository.delete(id)
      if (ret.affected === 1) {
        return rmtask;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
