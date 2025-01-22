import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApexChart, ChartComponent } from 'ng-apexcharts';
import { CategoriesChartService } from './categories-chart.service';

@Component({
  selector: 'naf-categories-chart',
  imports: [CommonModule, ChartComponent],
  templateUrl: './categories-chart.component.html',
  styles: ':host {display: block}'
})
export class CategoriesChartComponent implements OnInit {
  readonly chartOptions: ApexChart = {
    toolbar: {
      show: false
    },
    type: 'donut',
  }

  series = signal<number[]>([]);
  labels = signal<string[]>([]);

  private readonly categoriesChartService = inject(CategoriesChartService);

  async ngOnInit() {
    const data = await this.categoriesChartService.getData();

    this.series.set(data.series);
    this.labels.set(data.labels);
  }
}
