import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComedyShowSectionComponent } from './comedy-show-section.component';

describe('ComedyShowSectionComponent', () => {
  let component: ComedyShowSectionComponent;
  let fixture: ComponentFixture<ComedyShowSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComedyShowSectionComponent]
    });
    fixture = TestBed.createComponent(ComedyShowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
