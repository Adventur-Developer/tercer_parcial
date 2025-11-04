import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTres } from './componente-tres';

describe('ComponenteTres', () => {
  let component: ComponenteTres;
  let fixture: ComponentFixture<ComponenteTres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteTres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteTres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
