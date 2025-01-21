import { Component } from '@angular/core';
import { SidebarLinkComponent } from './sidebar-link/sidebar-link.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as icons from '@mdi/js';

@Component({
  selector: 'naf-sidebar',
  imports: [SidebarLinkComponent, NgOptimizedImage, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly icons = icons;
}
