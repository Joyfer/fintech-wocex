import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tasksProtectRoute } from './auth/guards/tasksProtectRoute';
import { IndexComponent } from './pages/index/index.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [tasksProtectRoute],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
