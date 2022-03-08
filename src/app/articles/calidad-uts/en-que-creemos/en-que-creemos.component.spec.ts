import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnQueCreemosComponent } from './en-que-creemos.component';

describe('EnQueCreemosComponent', () => {
  let component: EnQueCreemosComponent;
  let fixture: ComponentFixture<EnQueCreemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnQueCreemosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnQueCreemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
