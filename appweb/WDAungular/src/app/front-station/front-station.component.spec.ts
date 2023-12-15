import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStationComponent } from './front-station.component';

describe('FrontStationComponent', () => {
  let component: FrontStationComponent;
  let fixture: ComponentFixture<FrontStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
