import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarCamionesPageRoutingModule } from './agregar-camiones-routing.module';

import { AgregarCamionesPage } from './agregar-camiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarCamionesPageRoutingModule
  ],
  declarations: [AgregarCamionesPage]
})
export class AgregarCamionesPageModule {}
