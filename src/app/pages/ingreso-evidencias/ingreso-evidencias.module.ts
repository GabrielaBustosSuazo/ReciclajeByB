import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoEvidenciasPageRoutingModule } from './ingreso-evidencias-routing.module';

import { IngresoEvidenciasPage } from './ingreso-evidencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoEvidenciasPageRoutingModule
  ],
  declarations: [IngresoEvidenciasPage]
})
export class IngresoEvidenciasPageModule {}
