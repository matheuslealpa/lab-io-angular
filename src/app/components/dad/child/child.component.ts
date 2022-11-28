import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h1>{{ informacaoChild }}</h1>
  `,
})
export class ChildComponent {

  @Input() public informacaoChild?: string;

}
