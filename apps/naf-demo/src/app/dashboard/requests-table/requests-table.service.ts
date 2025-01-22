import { Injectable } from '@angular/core';

export type RequestResponse = {
  date: string;
  name: string;
  amount: number;
  status: 'active' | 'inactive';
}

const mock: RequestResponse[] = [
  {
    date: '30/01/2021',
    name: 'Miss Mathilde Stamm',
    amount: 118,
    status: 'active',
  },
  {
    date: '20/12/2020',
    name: 'Amber Feeney',
    amount: 132,
    status: 'inactive',
  },
  {
    date: '26/11/2019',
    name: 'Mr. Sammie Hirthe',
    amount: 91,
    status: 'active',
  },
]

@Injectable({
  providedIn: 'root'
})
export class RequestsTableService {
  async getData(): Promise<RequestResponse[]> {
    return mock;
  }
}
