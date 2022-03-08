import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditacionInstitucionalComponent } from './acreditacion-institucional.component';

describe('AcreditacionInstitucionalComponent', () => {
  let component: AcreditacionInstitucionalComponent;
  let fixture: ComponentFixture<AcreditacionInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcreditacionInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditacionInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
