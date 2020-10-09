import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrozLegumbresPastasComponent } from './arroz-legumbres-pastas.component';

describe('ArrozLegumbresPastasComponent', () => {
  let component: ArrozLegumbresPastasComponent;
  let fixture: ComponentFixture<ArrozLegumbresPastasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrozLegumbresPastasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrozLegumbresPastasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
