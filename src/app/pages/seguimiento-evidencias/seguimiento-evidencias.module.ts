import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoEvidenciasPageRoutingModule } from './seguimiento-evidencias-routing.module';

import { SeguimientoEvidenciasPage } from './seguimiento-evidencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoEvidenciasPageRoutingModule
  ],
  declarations: [SeguimientoEvidenciasPage]
})
export class SeguimientoEvidenciasPageModule {}
