import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveOrderCardComponent } from './admin-active-order-card.component';

describe('AdminActiveOrderCardComponent', () => {
  let component: AdminActiveOrderCardComponent;
  let fixture: ComponentFixture<AdminActiveOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActiveOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
