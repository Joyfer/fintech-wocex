import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/model/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private TaskService: TasksService) {
    this.myTasks = TaskService.myTasks;
  }
  ngOnInit(): void {}

  myTasks: Tasks[];

  editTask(data: Tasks): void {
    this.TaskService.editTask(data);
  }
  deleteTask(data: number): void {
    this.TaskService.deleteTask(data);
  }
  finishTask(data: number): void {
    this.TaskService.finishTask(data)
  }
}
