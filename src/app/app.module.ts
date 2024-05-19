import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportsModuleMaterial } from 'src/shared/imports-material/imports-material/imports-material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NavBarComponent } from 'src/shared/components/nav-bar/nav-bar.component';
import { CalculadoraMetodosComponent } from './pages/calculadora-metodos/calculadora-metodos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavBarComponent,
    CalculadoraMetodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportsModuleMaterial,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
