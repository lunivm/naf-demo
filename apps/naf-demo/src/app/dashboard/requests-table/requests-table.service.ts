import { Injectable } from '@angular/core';

export type RequestResponse = {
  date: string;
  name: string;
  amount: number;
  status: 'active' | 'inactive';
}

export type RequestFilterParams = {
  status: 'active'
}

const mock: RequestResponse[] = [
  {
    date: '30/01/2023',
    name: 'Miss Mathilde Stamm',
    amount: 118,
    status: 'active',
  },
  {
    date: '20/12/2023',
    name: 'Amber Feeney',
    amount: 132,
    status: 'inactive',
  },
  {
    date: '26/11/2023',
    name: 'Mr. Sammie Hirthe',
    amount: 91,
    status: 'active',
  },
  {
    date: '30/01/2022',
    name: 'Connor Little',
    amount: 11,
    status: 'active',
  },
  {
    date: '20/12/2022',
    name: 'Amber Feeney',
    amount: 232,
    status: 'inactive',
  },
  {
    date: '26/11/2022',
    name: 'Mr. Sammie Hirthe',
    amount: 391,
    status: 'inactive',
  },
  {
    date: '30/01/2021',
    name: 'Miss Mathilde Stamm',
    amount: 1018,
    status: 'active',
  },
  {
    date: '20/12/2020',
    name: 'Amber Feeney',
    amount: 1302,
    status: 'inactive',
  },
  {
    date: '26/11/2019',
    name: 'Mr. Sammie Hirthe',
    amount: 921,
    status: 'inactive',
  },
]

@Injectable({
  providedIn: 'root'
})
export class RequestsTableService {
  async getData(filter?: RequestFilterParams | undefined): Promise<RequestResponse[]> {
    return filter?.status === 'active' ? mock.filter(item => item.status === 'active') : mock;
  }
}
