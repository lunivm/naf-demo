import { Component, inject, OnInit, signal } from '@angular/core';
import { ApexChart, ChartComponent } from 'ng-apexcharts';
import { BookingsChartService } from './bookings-chart.service';

@Component({
  selector: 'naf-bookings-chart',
  imports: [ChartComponent],
  templateUrl: './bookings-chart.component.html',
  styles: ':host {display: block}'
})
export class BookingsChartComponent implements OnInit {
  readonly chartOptions: ApexChart = {
    toolbar: {
      show: false
    },
    type: 'area',
  }

  series = signal<ApexAxisChartSeries>([])

  private readonly bookingsChartService = inject(BookingsChartService);

  async ngOnInit() {
    this.series.set(await this.bookingsChartService.getData())
  }
}
