import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.css']
})
export class ConversorMoedasComponent {
  real: number = 0;
  dolar: number = 0;
  euro: number = 0;
  libra: number = 0;
  result: number | undefined;
  converte: number | undefined;

  calculo(){
      this.converte = this.real / this.dolar;
      this.converte = this.real / this.euro;
      this.converte = this.real  / this.libra;
  }
}
