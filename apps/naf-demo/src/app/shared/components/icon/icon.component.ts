import { Component, input } from '@angular/core';

/**
 * Since UI library is PrimeNG, we use tiny custom component for icons to keep dependencies minimal
 * The other option described in https://pictogrammers.com/docs/library/mdi/getting-started/angular/#angular-material
 * MatIconModule requires additional dependency @angular/material
 */
@Component({
  selector: 'naf-icon',
  template: `
    <svg
      viewBox="0 0 24 24"
      style="display:inline-block;width:1.5rem"
    >
      <path [attr.d]="path()"></path>
    </svg>
  `,
  styles: 'svg path { fill: currentColor; }',
})
export class IconComponent {
  // alert icon by default
  path = input<string | undefined>('M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z');
}
