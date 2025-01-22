import { TestBed } from '@angular/core/testing';

import { BookingsChartService } from './bookings-chart.service';

describe('BookingsChartService', () => {
  let service: BookingsChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingsChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
