import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifStationComponent } from './modif-station.component';

describe('ModifStationComponent', () => {
  let component: ModifStationComponent;
  let fixture: ComponentFixture<ModifStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifStationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
