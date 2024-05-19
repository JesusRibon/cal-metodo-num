import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulasService {

  constructor() { }

  trapezoidal(f: (x: number) => number, a: number, b: number, n: number): number {
    const h = (b - a) / n;
    let sum = f(a) + f(b);

    for (let i = 1; i < n; i++) {
      sum += 2 * f(a + i * h);
    }

    return (h / 2) * sum;
  }

  simpson13(f: (x: number) => number, a: number, b: number, n: number): number {
    const h = (b - a) / n;
    let sum = f(a) + f(b);

    for (let i = 1; i < n; i++) {
      sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);
    }

    return (h / 3) * sum;
  }

  simpson38(f: (x: number) => number, a: number, b: number, n: number): number {
    const h = (b - a) / n;
    let sum = f(a) + f(b);

    for (let i = 1; i < n; i++) {
      sum += (i % 3 === 0 ? 2 : 3) * f(a + i * h);
    }

    return (3 * h / 8) * sum;
  }

  simpsonAbierto(f: (x: number) => number, a: number, b: number, n: number): number {
    const h = (b - a) / (n + 1);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += f(a + i * h);
    }

    return (2 * h / 3) * sum;
  }

  jorgeBoole(f: (x: number) => number, a: number, b: number): number {
    const h = (b - a) / 4;
    return (2 * h / 45) * (7 * f(a) + 32 * f(a + h) + 12 * f(a + 2 * h) + 32 * f(a + 3 * h) + 7 * f(b));
  }
}
