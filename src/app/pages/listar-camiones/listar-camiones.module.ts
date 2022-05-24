import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCamionesPageRoutingModule } from './listar-camiones-routing.module';

import { ListarCamionesPage } from './listar-camiones.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ListarCamionesPageRoutingModule
  ],
  declarations: [ListarCamionesPage]
})
export class ListarCamionesPageModule {}
