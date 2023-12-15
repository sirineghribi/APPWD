import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBusComponent } from './front-bus.component';

describe('FrontBusComponent', () => {
  let component: FrontBusComponent;
  let fixture: ComponentFixture<FrontBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
