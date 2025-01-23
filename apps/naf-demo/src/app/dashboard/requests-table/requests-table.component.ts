import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {
  RequestFilterParams,
  RequestResponse,
  RequestsTableService,
} from './requests-table.service';
import { Card } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'naf-requests-table',
  imports: [CommonModule, TableModule, Card, TabsModule],
  templateUrl: './requests-table.component.html',
  styleUrl: './requests-table.component.scss',
})
export class RequestsTableComponent implements OnInit {
  requests = signal<RequestResponse[]>([]);

  private readonly requestsTableService = inject(RequestsTableService);

  async ngOnInit() {
    this.requests.set(await this.requestsTableService.getData());
  }

  async onTabClick(tab: 'recent' | 'active') {
    const filter =
      tab === 'active'
        ? ({
            status: 'active',
          } as RequestFilterParams)
        : undefined;

    const requests = await this.requestsTableService.getData(filter);
    this.requests.set(requests);
  }
}
