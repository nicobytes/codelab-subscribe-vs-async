import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksSubscribeComponent } from './tasks-subscribe/tasks-subscribe.component';
import { TasksAsyncComponent } from './tasks-async/tasks-async.component';

const routes: Routes = [
  {
    path: 'tasks-subscribe',
    component: TasksSubscribeComponent
  },
  {
    path: 'tasks-async',
    component: TasksAsyncComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
