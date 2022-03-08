import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturaDeLaCalidadComponent } from './cultura-de-la-calidad.component';

describe('CulturaDeLaCalidadComponent', () => {
  let component: CulturaDeLaCalidadComponent;
  let fixture: ComponentFixture<CulturaDeLaCalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturaDeLaCalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulturaDeLaCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
