import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarRecolectoresPageRoutingModule } from './listar-recolectores-routing.module';

import { ListarRecolectoresPage } from './listar-recolectores.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ListarRecolectoresPageRoutingModule
  ],
  declarations: [ListarRecolectoresPage]
})
export class ListarRecolectoresPageModule {}
