import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/model/tasks.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  myTasks: Tasks[] = [
    new Tasks('Arroz', 'Hacer arroz', false),
    new Tasks('Con', 'Hacer con', false),
    new Tasks('Leche', 'Hacer leche', false),
  ];

  editATask(value: Tasks): void {
    let { title, description, finished, id } = value;
    console.log(id);
  }

  deleteTask(id: number): void {
    let i = this.myTasks.findIndex((el) => el.id === id);
    this.myTasks.splice(i, 1)
  }
}
