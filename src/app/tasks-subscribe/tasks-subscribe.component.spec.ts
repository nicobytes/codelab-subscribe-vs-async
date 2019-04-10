import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSubscribeComponent } from './tasks-subscribe.component';

describe('TasksSubscribeComponent', () => {
  let component: TasksSubscribeComponent;
  let fixture: ComponentFixture<TasksSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
