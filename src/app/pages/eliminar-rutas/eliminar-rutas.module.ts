import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarRutasPageRoutingModule } from './eliminar-rutas-routing.module';

import { EliminarRutasPage } from './eliminar-rutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarRutasPageRoutingModule
  ],
  declarations: [EliminarRutasPage]
})
export class EliminarRutasPageModule {}
