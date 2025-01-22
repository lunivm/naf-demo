import { Injectable } from '@angular/core';

export type CategoriesChartResponse = {
  series: number[];
  labels: string[];
}

const mock: CategoriesChartResponse = {
  series: [
    25.6,
    32,
    23.8,
    9.9,
    8.7
  ],
  labels: [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ]
};

@Injectable({
  providedIn: 'root'
})
export class CategoriesChartService {
  async getData(): Promise<CategoriesChartResponse> {
    return mock;
  }
}
