import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCuatro } from './componente-cuatro';

describe('ComponenteCuatro', () => {
  let component: ComponenteCuatro;
  let fixture: ComponentFixture<ComponenteCuatro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCuatro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCuatro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
