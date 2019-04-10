import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Task } from './../task.model';
import { TasksService } from './../tasks.service';

@Component({
  selector: 'app-tasks-subscribe',
  templateUrl: './tasks-subscribe.component.html',
  styleUrls: ['./tasks-subscribe.component.scss']
})
export class TasksSubscribeComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.tasksService.getTasks()
    .pipe(
      takeUntil(this.unsubscribe$) // unsubscribe to prevent memory leak
    )
    .subscribe(tasks => {
      this.tasks = tasks; // unwrap observable
      this.cd.markForCheck(); // trigger change detection
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
