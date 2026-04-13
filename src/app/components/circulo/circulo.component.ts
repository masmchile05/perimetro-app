import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CirculoComponent {
  radio: number | null = null;
  resultado: number | null = null;
  mostrarResultado = false;

  calcularPerimetro(): void {
    if (this.radio !== null && this.radio > 0) {
      const circulo = new Circulo(this.radio);
      this.resultado = circulo.calcularPerimetro();
      this.mostrarResultado = true;
    } else {
      this.resultado = null;
      this.mostrarResultado = false;
    }
  }

  limpiar(): void {
    this.radio = null;
    this.resultado = null;
    this.mostrarResultado = false;
  }
}
