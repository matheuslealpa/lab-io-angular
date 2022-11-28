import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-dad></app-dad>
  `,
})
export class AppComponent {
  title = 'lab-io-angular';
}
