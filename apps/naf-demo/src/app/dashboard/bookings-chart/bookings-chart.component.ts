import { Component } from '@angular/core';
import { ApexChart, ChartComponent } from 'ng-apexcharts';

@Component({
  selector: 'naf-bookings-chart',
  imports: [ChartComponent],
  templateUrl: './bookings-chart.component.html',
  styles: ':host {display: block}'
})
export class BookingsChartComponent {
  readonly chartOptions: ApexChart = {
    toolbar: {
      show: false
    },
    type: 'area',
  }
}
