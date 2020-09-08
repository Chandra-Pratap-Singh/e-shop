import { TestBed } from '@angular/core/testing';

import { ActiveOrdersManagementService } from './active-orders-management.service';

describe('ActiveOrdersManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActiveOrdersManagementService = TestBed.get(ActiveOrdersManagementService);
    expect(service).toBeTruthy();
  });
});
