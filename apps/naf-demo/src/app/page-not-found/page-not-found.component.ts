import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'naf-page-not-found',
  imports: [CommonModule, MatIcon, ToolbarComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
