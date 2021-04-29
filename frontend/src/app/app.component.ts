import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public idEstado: string;

  setIdEstadoInCidade(event): void {
    this.idEstado = event;
  }

}
