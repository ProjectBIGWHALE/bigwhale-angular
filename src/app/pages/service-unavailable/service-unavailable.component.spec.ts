import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceUnavailableComponent } from './service-unavailable.component';

describe('ServiceUnavailableComponent', () => {
  let component: ServiceUnavailableComponent;
  let fixture: ComponentFixture<ServiceUnavailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceUnavailableComponent]
    });
    fixture = TestBed.createComponent(ServiceUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
