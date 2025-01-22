import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { ChartCardComponent } from '../shared/components/chart-card/chart-card.component';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'naf-dashboard',
  imports: [
    CommonModule,
    ToolbarComponent,
    Button,
    Card,
    ChartCardComponent,
    TabsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
