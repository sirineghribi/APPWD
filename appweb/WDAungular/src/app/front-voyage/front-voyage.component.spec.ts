import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontVoyageComponent } from './front-voyage.component';

describe('FrontVoyageComponent', () => {
  let component: FrontVoyageComponent;
  let fixture: ComponentFixture<FrontVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
