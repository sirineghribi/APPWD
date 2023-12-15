import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontReservationComponent } from './front-reservation.component';

describe('FrontReservationComponent', () => {
  let component: FrontReservationComponent;
  let fixture: ComponentFixture<FrontReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontReservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
