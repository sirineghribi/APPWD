import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackStationComponent } from './back-station.component';

describe('BackStationComponent', () => {
  let component: BackStationComponent;
  let fixture: ComponentFixture<BackStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
