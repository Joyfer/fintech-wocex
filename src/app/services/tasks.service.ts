import { Injectable } from '@angular/core';
import { Tasks } from '../model/tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  myTasks: Tasks[] = [];

  newTask(data: Tasks): void {
    this.myTasks.push(data);
  }

  editTask(value: Tasks): void {
    let { title, description, id } = value;
    let taskIndex: number = this.myTasks.findIndex((el) => el.id === id);
    this.myTasks[taskIndex].title = title;
    this.myTasks[taskIndex].description = description;
  }

  deleteTask(id: number): void {
    let i = this.myTasks.findIndex((el) => el.id === id);
    this.myTasks.splice(i, 1);
  }
  finishTask(id: number): void {
    let taskIndex: number = this.myTasks.findIndex((el) => el.id === id);
    this.myTasks[taskIndex].finished = true;
  }
}
