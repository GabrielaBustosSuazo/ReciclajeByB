import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRutasPageRoutingModule } from './agregar-rutas-routing.module';

import { AgregarRutasPage } from './agregar-rutas.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarRutasPageRoutingModule
  ],
  declarations: [AgregarRutasPage]
})
export class AgregarRutasPageModule {}
