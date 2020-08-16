import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompletedOrderListComponent } from './admin-completed-order-list.component';

describe('AdminCompletedOrderListComponent', () => {
  let component: AdminCompletedOrderListComponent;
  let fixture: ComponentFixture<AdminCompletedOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompletedOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompletedOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
