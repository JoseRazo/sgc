import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroCertificadorComponent } from './centro-certificador.component';

describe('CentroCertificadorComponent', () => {
  let component: CentroCertificadorComponent;
  let fixture: ComponentFixture<CentroCertificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroCertificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroCertificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
