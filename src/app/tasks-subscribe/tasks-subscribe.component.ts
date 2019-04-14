import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TasksService } from './../task.service';
import { Task } from './../task.model';

@Component({
  selector: 'app-tasks-subscribe',
  templateUrl: './tasks-subscribe.component.html',
  styleUrls: ['./tasks-subscribe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksSubscribeComponent implements OnInit, OnDestroy {

  tasks: Task[] = [];
  private unsubscribe$ = new Subject<void>();

  constructor(
    private tasksService: TasksService,
    private cd: ChangeDetectorRef
  ) {
  }

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
