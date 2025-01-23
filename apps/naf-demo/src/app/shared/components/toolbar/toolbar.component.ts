import { Component, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Toolbar } from 'primeng/toolbar';
import { DARK_MODE_CLASS } from '../../constants/styling';

@Component({
  selector: 'naf-toolbar',
  imports: [CommonModule, MatIcon, Toolbar],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  title = input('');
  themeIcon = signal('');

  private readonly darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  ngOnInit() {
    this.toggleTheme(this.isCurrentlyDarkMode());
    this.darkMediaQuery.addEventListener('change', ({ matches }) => {
      this.toggleTheme(matches);
    })
  }

  toggleTheme(state?: boolean | undefined) {
    const element = document.querySelector('html') as HTMLElement;
    element.classList.toggle(DARK_MODE_CLASS, state);

    this.setThemeIcon(element.classList.contains(DARK_MODE_CLASS));
  }

  private isCurrentlyDarkMode() {
    return this.darkMediaQuery.matches;
  }

  private setThemeIcon(darkMode: boolean) {
    this.themeIcon.set(darkMode ? 'white-balance-sunny' : 'weather-night');
  }
}
