import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RequestResponse, RequestsTableService } from './requests-table.service';

@Component({
  selector: 'naf-requests-table',
  imports: [ CommonModule, TableModule ],
  templateUrl: './requests-table.component.html',
  styleUrl: './requests-table.component.scss',
})
export class RequestsTableComponent implements OnInit {
  requests = signal<RequestResponse[]>([]);

  private readonly requestsTableService = inject(RequestsTableService)

  async ngOnInit() {
    this.requests.set(await this.requestsTableService.getData());
  }
}
