import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHorizontalComponent } from './cards-horizontal.component';

describe('CardsHoriztonalComponent', () => {
  let component: CardsHorizontalComponent;
  let fixture: ComponentFixture<CardsHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsHorizontalComponent],
    });
    fixture = TestBed.createComponent(CardsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
