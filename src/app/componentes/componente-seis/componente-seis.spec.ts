import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSeis } from './componente-seis';

describe('ComponenteSeis', () => {
  let component: ComponenteSeis;
  let fixture: ComponentFixture<ComponenteSeis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteSeis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSeis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
