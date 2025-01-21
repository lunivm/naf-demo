import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  imports: [
    MatIconModule,
    SidebarComponent,
    RouterModule
  ],
  selector: 'naf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly iconRegistry = inject(MatIconRegistry);
  private readonly domSanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl('mdi.svg')
    );
  }
}
