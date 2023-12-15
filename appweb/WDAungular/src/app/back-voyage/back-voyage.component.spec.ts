import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackVoyageComponent } from './back-voyage.component';

describe('BackVoyageComponent', () => {
  let component: BackVoyageComponent;
  let fixture: ComponentFixture<BackVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
