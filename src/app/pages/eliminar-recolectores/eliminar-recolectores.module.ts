import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarRecolectoresPageRoutingModule } from './eliminar-recolectores-routing.module';

import { EliminarRecolectoresPage } from './eliminar-recolectores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarRecolectoresPageRoutingModule
  ],
  declarations: [EliminarRecolectoresPage]
})
export class EliminarRecolectoresPageModule {}
