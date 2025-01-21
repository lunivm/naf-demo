import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../shared/components/icon/icon.component';

@Component({
  selector: 'naf-page-not-found',
  imports: [ CommonModule, IconComponent ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
