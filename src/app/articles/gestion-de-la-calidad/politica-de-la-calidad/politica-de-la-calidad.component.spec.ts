import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeLaCalidadComponent } from './politica-de-la-calidad.component';

describe('PoliticaDeLaCalidadComponent', () => {
  let component: PoliticaDeLaCalidadComponent;
  let fixture: ComponentFixture<PoliticaDeLaCalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaDeLaCalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaDeLaCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
