import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarCamionesPageRoutingModule } from './modificar-camiones-routing.module';

import { ModificarCamionesPage } from './modificar-camiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarCamionesPageRoutingModule
  ],
  declarations: [ModificarCamionesPage]
})
export class ModificarCamionesPageModule {}
