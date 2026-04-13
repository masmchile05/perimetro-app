import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TrianguloEscaleno } from '../../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class TrianguloComponent {
  lado1: number | null = null;
  lado2: number | null = null;
  lado3: number | null = null;
  resultado: number | null = null;
  mostrarResultado = false;

  calcularPerimetro(): void {
    if (
      this.lado1 !== null && this.lado1 > 0 &&
      this.lado2 !== null && this.lado2 > 0 &&
      this.lado3 !== null && this.lado3 > 0
    ) {
      const triangulo = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
      this.resultado = triangulo.calcularPerimetro();
      this.mostrarResultado = true;
    } else {
      this.resultado = null;
      this.mostrarResultado = false;
    }
  }
}