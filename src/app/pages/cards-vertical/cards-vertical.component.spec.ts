import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsVerticalComponent } from './cards-vertical.component';

describe('CardsVerticalComponent', () => {
  let component: CardsVerticalComponent;
  let fixture: ComponentFixture<CardsVerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsVerticalComponent]
    });
    fixture = TestBed.createComponent(CardsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
