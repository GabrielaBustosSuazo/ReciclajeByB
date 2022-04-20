import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarRecolectoresPageRoutingModule } from './agregar-recolectores-routing.module';

import { AgregarRecolectoresPage } from './agregar-recolectores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarRecolectoresPageRoutingModule
  ],
  declarations: [AgregarRecolectoresPage]
})
export class AgregarRecolectoresPageModule {}
