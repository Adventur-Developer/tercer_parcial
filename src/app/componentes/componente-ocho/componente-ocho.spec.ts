import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteOcho } from './componente-ocho';

describe('ComponenteOcho', () => {
  let component: ComponenteOcho;
  let fixture: ComponentFixture<ComponenteOcho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteOcho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteOcho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
