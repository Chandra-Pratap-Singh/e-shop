import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveOrderCardItemComponent } from './admin-active-order-card-item.component';

describe('AdminActiveOrderCardItemComponent', () => {
  let component: AdminActiveOrderCardItemComponent;
  let fixture: ComponentFixture<AdminActiveOrderCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActiveOrderCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveOrderCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
