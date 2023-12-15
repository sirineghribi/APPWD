import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifBusComponent } from './modif-bus.component';

describe('ModifBusComponent', () => {
  let component: ModifBusComponent;
  let fixture: ComponentFixture<ModifBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
