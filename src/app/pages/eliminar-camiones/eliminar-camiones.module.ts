import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarCamionesPageRoutingModule } from './eliminar-camiones-routing.module';

import { EliminarCamionesPage } from './eliminar-camiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarCamionesPageRoutingModule
  ],
  declarations: [EliminarCamionesPage]
})
export class EliminarCamionesPageModule {}
