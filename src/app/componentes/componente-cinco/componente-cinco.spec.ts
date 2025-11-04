import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCinco } from './componente-cinco';

describe('ComponenteCinco', () => {
  let component: ComponenteCinco;
  let fixture: ComponentFixture<ComponenteCinco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCinco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCinco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
