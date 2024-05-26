import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { CalculadoraMetodosComponent } from './pages/calculadora-metodos/calculadora-metodos.component';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraMetodosComponent
  },
  {
    path: 'calculadora',
    component: CalculadoraMetodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
