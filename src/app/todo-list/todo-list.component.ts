import { Component, OnInit, Input } from '@angular/core';

import { Task } from './../task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

}
