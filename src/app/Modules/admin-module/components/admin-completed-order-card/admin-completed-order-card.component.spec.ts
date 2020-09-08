import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompletedOrderCardComponent } from './admin-completed-order-card.component';

describe('AdminCompletedOrderCardComponent', () => {
  let component: AdminCompletedOrderCardComponent;
  let fixture: ComponentFixture<AdminCompletedOrderCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompletedOrderCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompletedOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
