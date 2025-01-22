import { Injectable } from '@angular/core';

const mock: ApexAxisChartSeries = [
  {
    type: 'area',
    name: '2020',
    data: [
      {
        x: '00:00',
        y: 30,
      },
      {
        x: '01:00',
        y: 40,
      },
      {
        x: '02:00',
        y: 50,
      },
      {
        x: '03:00',
        y: 20,
      },
      {
        x: '04:00',
        y: 30,
      },
      {
        x: '05:00',
        y: 70,
      },
      {
        x: '06:00',
        y: 60,
      },
    ],
  },
  {
    type: 'area',
    name: '2021',
    data: [
      {
        x: '00:00',
        y: 20,
      },
      {
        x: '01:00',
        y: 30,
      },
      {
        x: '02:00',
        y: 90,
      },
      {
        x: '03:00',
        y: 80,
      },
      {
        x: '04:00',
        y: 50,
      },
      {
        x: '05:00',
        y: 40,
      },
      {
        x: '06:00',
        y: 50,
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class BookingsChartService {
  async getData(): Promise<ApexAxisChartSeries> {
    return mock;
  }
}
