import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAsyncComponent } from './tasks-async.component';

describe('TasksAsyncComponent', () => {
  let component: TasksAsyncComponent;
  let fixture: ComponentFixture<TasksAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
