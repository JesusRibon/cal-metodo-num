import { Component } from '@angular/core';


export interface metedos {
    id: number;
    name: string;
    description: string;
    images: string;
}
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})

export class PrincipalComponent {
  arrayMetedos: metedos[] = [
    {
      id: 1,
      name: 'asda',
      description: 'sdad',
      images: 'urle'
    }, 
    {
      id: 1,
      name: 'asda',
      description: 'sdad',
      images: 'urle'
    },
    {
      id: 1,
      name: 'asda',
      description: 'sdad',
      images: 'urle'
    },
    {
      id: 1,
      name: 'asda',
      description: 'sdad',
      images: 'urle'
    },
    {
      id: 1,
      name: 'asda',
      description: 'sdad',
      images: 'urle'
    },
    {
      id: 1,
      name: 'asda',
      description: 'sdad',
      images: 'urle'
    },

  ];


  constructor(){}

  

}
