import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { TabsModule } from 'primeng/tabs';
import { BookingsChartComponent } from './bookings-chart/bookings-chart.component';
import { CategoriesChartComponent } from './categories-chart/categories-chart.component';

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
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
