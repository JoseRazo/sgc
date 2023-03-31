import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPorProcesosComponent } from './gestion-por-procesos.component';

describe('GestionPorProcesosComponent', () => {
  let component: GestionPorProcesosComponent;
  let fixture: ComponentFixture<GestionPorProcesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPorProcesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPorProcesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
