import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSiete } from './componente-siete';

describe('ComponenteSiete', () => {
  let component: ComponenteSiete;
  let fixture: ComponentFixture<ComponenteSiete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteSiete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSiete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
