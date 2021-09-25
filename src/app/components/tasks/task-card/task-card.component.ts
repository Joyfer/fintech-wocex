import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/model/tasks.model';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input() task: Tasks;
  @Input() index: number;
  @Output() editTask = new EventEmitter<Tasks>();
  @Output() deleteTask = new EventEmitter<number>();

  editTaskDone(): void {
    this.editTask.emit({
      title: 'hola',
      description: 'q tal',
      finished: false,
      id: this.task.id
    });
  }
  deleteTaskDone(): void {
    this.deleteTask.emit(this.task.id);
  }
  constructor() {}

  ngOnInit(): void {}
}
