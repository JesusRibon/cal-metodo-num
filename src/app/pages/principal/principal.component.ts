import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


export interface metedos {
  id: number;
  name: string;
  description: string;
  url: string | SafeResourceUrl;
}
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {

  constructor(private sanitizer: DomSanitizer) {}

  arrayMetedos: metedos[] = [
    {
      id: 1,
      name: 'Metodo Trapezoidal',
      description:
        'El método trapezoidal es una técnica numérica para aproximar integrales definidas, dividiendo el intervalo ([a, b]) en (n) subintervalos iguales y aproximando el área bajo la curva con trapecios. La integral se aproxima con (int_a^b f(x) , dx approx \frac{Delta x}{2} left[ f(a) + 2 sum_{i=1}^{n-1} f(x_i) + f(b) \right]), donde (Delta x = \frac{b - a}{n}). Es sencillo y efectivo para funciones suaves, pero su precisión depende del número de subintervalos, y puede ser menos preciso que métodos como el de Simpson para funciones con mucha curvatura.',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6ycBGPlX5sI?si=j2r092nqy6cz9FHE'),
    },
    {
      id: 1,
      name: 'Metedo de Simpson 1/3',
      description: 'El método de Simpson 1/3 es una técnica numérica para aproximar integrales definidas, dividiendo el intervalo \([a, b]\) en un número par de subintervalos iguales. Utiliza parábolas para aproximar el área bajo la curva, calculando la integral como \(\int_a^b f(x) \, dx \approx \frac{\Delta x}{3} \left[ f(a) + 4 \sum_{\text{impares}} f(x_i) + 2 \sum_{\text{pares}} f(x_i) + f(b) \right]\), donde \(\Delta x = \frac{b - a}{n}\). Este método es más preciso que el trapezoidal, especialmente para funciones suaves, ya que considera la curvatura de la función.',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lEtE__0VW0I?si=2AzdIdre7Sc4492L" title="YouTube video player"'),
    },
    {
      id: 1,
      name: 'Metodo Simpson 3/8',
      description: 'El método de Simpson 3/8 es una técnica numérica para aproximar integrales definidas, dividiendo el intervalo \([a, b]\) en un múltiplo de tres subintervalos iguales. Aproxima el área bajo la curva utilizando segmentos cúbicos. La integral se calcula como \(\int_a^b f(x) \, dx \approx \frac{3\Delta x}{8} \left[ f(a) + 3 \sum_{\text{multiplo 3+1,3+2}} f(x_i) + 2 \sum_{\text{multiplo de 3}} f(x_i) + f(b) \right]\), donde \(\Delta x = \frac{b - a}{n}\). Este método es más preciso que el trapezoidal y el Simpson 1/3 para muchas funciones, debido a su mejor manejo de la curvatura.',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/lqraE3g2I2g?si=ulqMeVgMfcy3gYQ7" title="YouTube video player"'),
    },
    {
      id: 1,
      name: 'Método Simpson Abierto',
      description: 'El método de Simpson abierto, también conocido como el método de Simpson 3/8 abierto, es una técnica numérica para aproximar integrales definidas que no utiliza los puntos de los extremos del intervalo',
      url: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/d5uPEFhLS0A?si=ovdJezOWXXCojFff"),
    },
    {
      id: 1,
      name: 'Metodo Jorge Boole',
      description: 'El método de Boole, también conocido como regla de Boole, es una técnica numérica para aproximar integrales definidas, que utiliza una fórmula basada en polinomios de cuarto grado',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vOSCevaytLA?si=iGDsRzQwpF5hn2SH'),
    },
  ];

}
