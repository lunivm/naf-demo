import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChart, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'naf-categories-chart',
  imports: [CommonModule, ChartComponent],
  templateUrl: './categories-chart.component.html',
  styles: ':host {display: block}'
})
export class CategoriesChartComponent {
  readonly chartOptions: ApexChart = {
    toolbar: {
      show: false
    },
    type: 'donut',
  }
}
