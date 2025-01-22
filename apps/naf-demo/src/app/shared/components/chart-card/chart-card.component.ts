import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'naf-chart-card',
  imports: [ CommonModule, Card, NgApexchartsModule ],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent {
  title = input('');
  chart = input<any>({ type: 'area' });
  series = input<any>([{
    data: [23, 34, 12, 54, 32, 43]
}])
}
