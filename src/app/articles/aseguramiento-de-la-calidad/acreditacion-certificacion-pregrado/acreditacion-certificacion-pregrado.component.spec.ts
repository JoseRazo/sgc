import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditacionCertificacionPregradoComponent } from './acreditacion-certificacion-pregrado.component';

describe('AcreditacionCertificacionPregradoComponent', () => {
  let component: AcreditacionCertificacionPregradoComponent;
  let fixture: ComponentFixture<AcreditacionCertificacionPregradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcreditacionCertificacionPregradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditacionCertificacionPregradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
