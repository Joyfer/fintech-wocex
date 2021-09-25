import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
