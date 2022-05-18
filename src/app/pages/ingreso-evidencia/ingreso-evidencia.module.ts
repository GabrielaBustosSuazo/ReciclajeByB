import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoEvidenciaPageRoutingModule } from './ingreso-evidencia-routing.module';

import { IngresoEvidenciaPage } from './ingreso-evidencia.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    IngresoEvidenciaPageRoutingModule
  ],
  declarations: [IngresoEvidenciaPage]
})
export class IngresoEvidenciaPageModule {}
