import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecolectoresPageRoutingModule } from './agregar-recolectores-routing.module';

import { AgregarRecolectoresPage } from './agregar-recolectores.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarRecolectoresPageRoutingModule,
  ],
  declarations: [AgregarRecolectoresPage],
})
export class AgregarRecolectoresPageModule {}
