import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionesIsoComponent } from './certificaciones-iso.component';

describe('CertificacionesIsoComponent', () => {
  let component: CertificacionesIsoComponent;
  let fixture: ComponentFixture<CertificacionesIsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificacionesIsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionesIsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
