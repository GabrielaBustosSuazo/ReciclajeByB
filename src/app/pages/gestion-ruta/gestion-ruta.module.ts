import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionRutaPageRoutingModule } from './gestion-ruta-routing.module';

import { GestionRutaPage } from './gestion-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionRutaPageRoutingModule
  ],
  declarations: [GestionRutaPage]
})
export class GestionRutaPageModule {}
