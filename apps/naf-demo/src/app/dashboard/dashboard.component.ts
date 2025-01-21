import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'naf-dashboard',
  imports: [CommonModule, ToolbarComponent, Button],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
