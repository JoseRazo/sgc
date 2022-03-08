import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoGeneralDeLaCalidadComponent } from './consejo-general-de-la-calidad.component';

describe('ConsejoGeneralDeLaCalidadComponent', () => {
  let component: ConsejoGeneralDeLaCalidadComponent;
  let fixture: ComponentFixture<ConsejoGeneralDeLaCalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejoGeneralDeLaCalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejoGeneralDeLaCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
