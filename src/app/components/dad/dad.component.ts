import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-dad',
  template: `<app-child [informacaoChild]="informacaoDad"></app-child>`
})
export class DadComponent {
  @Output() public informacaoDad: string = 'Nome: Teste'

}
