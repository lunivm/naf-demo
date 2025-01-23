import { Component, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { BookingsChartComponent } from './bookings-chart/bookings-chart.component';
import { CategoriesChartComponent } from './categories-chart/categories-chart.component';
import { RequestsTableComponent } from './requests-table/requests-table.component';
import { SubmitRequestModalComponent } from './submit-request-modal/submit-request-modal.component';

@Component({
  selector: 'naf-dashboard',
  imports: [
    CommonModule,
    ToolbarComponent,
    Button,
    Card,
    TabsModule,
    BookingsChartComponent,
    CategoriesChartComponent,
    RequestsTableComponent,
    SubmitRequestModalComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  submitRequestDialogVisible = model(false);

  showSubmitRequestDialog() {
    this.submitRequestDialogVisible.set(true);
  }
}
