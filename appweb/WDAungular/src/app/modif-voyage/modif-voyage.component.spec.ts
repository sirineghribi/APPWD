import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifVoyageComponent } from './modif-voyage.component';

describe('ModifVoyageComponent', () => {
  let component: ModifVoyageComponent;
  let fixture: ComponentFixture<ModifVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
