import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCamionesPageRoutingModule } from './listar-camiones-routing.module';

import { ListarCamionesPage } from './listar-camiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCamionesPageRoutingModule
  ],
  declarations: [ListarCamionesPage]
})
export class ListarCamionesPageModule {}
