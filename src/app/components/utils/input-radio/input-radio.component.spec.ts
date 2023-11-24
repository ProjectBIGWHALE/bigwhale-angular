import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadioComponent } from './input-radio.component';

describe('InputRadioComponent', () => {
  let component: InputRadioComponent;
  let fixture: ComponentFixture<InputRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRadioComponent]
    });
    fixture = TestBed.createComponent(InputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
