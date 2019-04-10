import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }


  getTasks(): Observable<Task[]> {
    return of([
      {
        id: '1',
        userId: '1',
        title: 'Task 1',
        completed: true
      },
      {
        id: '2',
        userId: '2',
        title: 'Task 2',
        completed: true
      }
    ]);
  }
}
