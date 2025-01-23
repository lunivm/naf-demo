import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'naf-toolbar',
  imports: [CommonModule, MatIcon, Toolbar],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  title = input('');
}
