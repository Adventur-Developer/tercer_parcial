import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUno } from './componente-uno';

describe('ComponenteUno', () => {
  let component: ComponenteUno;
  let fixture: ComponentFixture<ComponenteUno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteUno]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteUno);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
