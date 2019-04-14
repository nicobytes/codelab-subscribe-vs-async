import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TasksService } from './../task.service';
import { Task } from './../task.model';

@Component({
  selector: 'app-tasks-async',
  templateUrl: './tasks-async.component.html',
  styleUrls: ['./tasks-async.component.scss']
})
export class TasksAsyncComponent implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.tasks$ = this.tasksService.getTasks();
  }

}
