import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarRutasPageRoutingModule } from './listar-rutas-routing.module';

import { ListarRutasPage } from './listar-rutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarRutasPageRoutingModule
  ],
  declarations: [ListarRutasPage]
})
export class ListarRutasPageModule {}
