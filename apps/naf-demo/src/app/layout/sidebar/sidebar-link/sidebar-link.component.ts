import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'naf-sidebar-link',
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.scss',
})
export class SidebarLinkComponent {
  title = input<string>();
  route = input<string>();
  icon = input<string>('');
}
