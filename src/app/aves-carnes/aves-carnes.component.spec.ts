import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvesCarnesComponent } from './aves-carnes.component';

describe('AvesCarnesComponent', () => {
  let component: AvesCarnesComponent;
  let fixture: ComponentFixture<AvesCarnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvesCarnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvesCarnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
