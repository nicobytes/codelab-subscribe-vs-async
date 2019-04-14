![Imgur](https://i.imgur.com/FdWz6wL.png)

# CodelabSubscribeVsAsync

```
this.tasksService.getTasks()
.subscribe(tasks => {
  this.tasks = tasks;
});
```

```
export class AppComponent implements OnInit {

  title = 'codelab-subscribe-vs-async';
  tasks: Task[] = [];

  constructor(
    private tasksService: TasksService
  ) {}

  ngOnInit() {
    this.tasksService.getTasks()
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
```

```
<h2>Tasks w/ subscribe: </h2>
<ul *ngIf="tasks.length > 0">
  <li *ngFor="let task of tasks">
    {{ task.title }}
  </li>
</ul>
```

```
private unsubscribe$ = new Subject<void>();

ngOnInit() {
  this.tasksService.getTasks()
  .pipe(
    takeUntil(this.unsubscribe$)
  )
  .subscribe(tasks => {
    this.tasks = tasks;
  });
}

ngOnDestroy(): void {
  this.unsubscribe$.next();
  this.unsubscribe$.complete();
}
```

```
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
```

```
tasks$: Observable<Task[]>;

constructor(
  private tasksService: TasksService,
) { }

ngOnInit() {
  this.tasks$ = this.tasksService.getTasks();
}
```

```
<h2>Tasks w/ async pipe: </h2>
<ul *ngIf="(tasks$ | async).length"> <!-- subscribe -->
  <li *ngFor="let task of tasks$ | async"> <!-- subscribe -->
    {{ task.title }}
  </li>
</ul>
```

```
<h2>Tasks w/ async pipe: </h2>
<ul *ngIf="(tasks$ | async).length"> <!-- subscribe -->
  <li *ngFor="let task of tasks$ | async"> <!-- subscribe -->
    {{ task.title }}
  </li>
</ul>
```

```
<div *ngIf="tasks$ | async as tasks">  <!-- once subscribe -->
  <ul *ngIf="tasks.length">
    <li *ngFor="let task of tasks">
      {{ task.title }}
    </li>
  </ul>
</div>
```

```
<h2>Tasks w/ async pipe: </h2>
<app-todo-list [tasks]="tasks$ | async"></app-todo-list>
```