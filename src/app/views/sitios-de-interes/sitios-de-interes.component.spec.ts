import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitiosDeInteresComponent } from './sitios-de-interes.component';

describe('SitiosDeInteresComponent', () => {
  let component: SitiosDeInteresComponent;
  let fixture: ComponentFixture<SitiosDeInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitiosDeInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitiosDeInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
