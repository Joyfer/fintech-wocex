import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { IndexComponent } from './pages/index/index.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TaskListComponent } from './components/tasks/task-list/task-list.component';
import { TaskCardComponent } from './components/tasks/task-card/task-card.component';
import { TasksService } from './services/tasks.service';
import { NewTaskFormComponent } from './components/tasks/task-new/new-task-form/new-task-form.component';
import { tasksProtectRoute } from './auth/guards/tasksProtectRoute';
import { LoginService } from './auth/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginFormComponent,
    TasksComponent,
    TaskListComponent,
    TaskCardComponent,
    NewTaskFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDividerModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [TasksService, tasksProtectRoute, LoginService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
