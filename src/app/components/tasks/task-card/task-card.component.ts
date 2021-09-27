import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tasks } from 'src/app/model/tasks.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  @Output() finishTask = new EventEmitter<number>();

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.newTitle = this.task.title;
    this.newDescription = this.task.description;
  }

  newTitle: string;
  newDescription: string;

  editableTask: boolean = false;

  startEditTask(): void {
    this.editableTask = true;
  }

  editTaskDone(): void {
    this.editTask.emit({
      title: this.newTitle,
      description: this.newDescription,
      finished: false, //No using this
      id: this.task.id,
    });
    this.editableTask = false;
    this._snackBar.open("Task edited", "CLOSE", {duration: 2000})
  }
  deleteTaskDone(): void {
    this.deleteTask.emit(this.task.id);
    this._snackBar.open("Task deleted", "CLOSE", {duration: 2000})

  }
  finishTaskDone(): void {
    this.finishTask.emit(this.task.id)
    this._snackBar.open("Task finished!", "CLOSE", {duration: 2000})

  }
}
