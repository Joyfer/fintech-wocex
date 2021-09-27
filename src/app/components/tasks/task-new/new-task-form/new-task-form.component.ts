import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/model/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss'],
})
export class NewTaskFormComponent implements OnInit {
  constructor(
    private taskService: TasksService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  title: string = '';
  description: string = '';

  newTask(): void {
    if (this.title != '' && this.description != '') {
      this.taskService.newTask(new Tasks(this.title, this.description, false));
      this.title = '';
      this.description = '';
    }
    this._snackBar.open('Task created', 'CLOSE', {
      duration: 2000,
    });
  }
}
