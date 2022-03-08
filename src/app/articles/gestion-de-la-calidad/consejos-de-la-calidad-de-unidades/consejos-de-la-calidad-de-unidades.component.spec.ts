import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosDeLaCalidadDeUnidadesComponent } from './consejos-de-la-calidad-de-unidades.component';

describe('ConsejosDeLaCalidadDeUnidadesComponent', () => {
  let component: ConsejosDeLaCalidadDeUnidadesComponent;
  let fixture: ComponentFixture<ConsejosDeLaCalidadDeUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejosDeLaCalidadDeUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosDeLaCalidadDeUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
