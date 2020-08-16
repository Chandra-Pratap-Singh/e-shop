import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveOrderManagementComponent } from './admin-active-order-management.component';

describe('AdminActiveOrderManagementComponent', () => {
  let component: AdminActiveOrderManagementComponent;
  let fixture: ComponentFixture<AdminActiveOrderManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActiveOrderManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveOrderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
