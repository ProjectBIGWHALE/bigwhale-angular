import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHomeHelpComponent } from './nav-home-help.component';

describe('NavHomeHelpComponent', () => {
  let component: NavHomeHelpComponent;
  let fixture: ComponentFixture<NavHomeHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavHomeHelpComponent]
    });
    fixture = TestBed.createComponent(NavHomeHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
