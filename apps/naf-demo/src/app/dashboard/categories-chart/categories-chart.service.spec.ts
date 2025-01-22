import { TestBed } from '@angular/core/testing';

import { CategoriesChartService } from './categories-chart.service';

describe('CategoriesChartService', () => {
  let service: CategoriesChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
