import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormulasService } from 'src/shared/service/formulas.service';

type MethodKey = 'trapezoidal' | 'simpson13' | 'simpson38' | 'simpsonAbierto' | 'jorgeBoole';

@Component({
  selector: 'app-calculadora-metodos',
  templateUrl: './calculadora-metodos.component.html',
  styleUrls: ['./calculadora-metodos.component.scss']
})
export class CalculadoraMetodosComponent {
  calcForm!: FormGroup;
  result: number = 0;
  delta: number = 0;

  constructor(
    private fb: FormBuilder,
    private service: FormulasService
  ) {
    this.calcForm = this.fb.group({
      functionStr: ['', Validators.required],
      lowerLimit: [0, Validators.required],
      upperLimit: [1, Validators.required],
      intervals: [4, Validators.required]
    });
  }

  calculateTrapezoidal() {
    this.calculate('trapezoidal');
  }

  calculateSimpson13() {
    this.calculate('simpson13');
  }

  calculateSimpson38() {
    this.calculate('simpson38');
  }

  calculateSimpsonAbierto() {
    this.calculate('simpsonAbierto');
  }

  calculateJorgeBoole() {
    this.calculate('jorgeBoole');
  }


  calculate(method: MethodKey) {
    const { functionStr, lowerLimit, upperLimit, intervals } = this.calcForm.value;

    try {
      const f = this.createFunction(functionStr);
      if (!f) {
        throw new Error('La función ingresada no es válida.');
      }

      if (functionStr.includes('log') && (lowerLimit <= 0 || upperLimit <= 0)) {
        throw new Error('El argumento de la función logarítmica debe ser mayor que cero.');
      }

      // Calcular delta
      this.delta = (upperLimit - lowerLimit) / intervals;

      // Calcular el resultado
      this.result = this.service[method](f, lowerLimit, upperLimit, intervals);
    } catch (error) {
      console.error('Error al calcular:', error);
      alert('Error al calcular. Por favor, verifica la función y los límites de integración.');
    }
  }

  private createFunction(functionStr: string): ((x: number) => number) | null {
    try {
      return new Function('x', `return ${functionStr};`) as (x: number) => number;
    } catch (e) {
      console.error('Error al crear la función:', e);
      return null;
    }
  }


}
