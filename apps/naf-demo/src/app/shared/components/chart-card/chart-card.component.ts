import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'primeng/card';

@Component({
  selector: 'naf-chart-card',
  imports: [CommonModule, Card],
  templateUrl: './chart-card.component.html',
  styleUrl: './chart-card.component.scss',
})
export class ChartCardComponent {
  title = input('');
}
