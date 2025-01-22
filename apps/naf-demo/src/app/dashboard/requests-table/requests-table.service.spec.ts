import { TestBed } from '@angular/core/testing';

import { RequestsTableService } from './requests-table.service';

describe('RequestsTableService', () => {
  let service: RequestsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
