import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarClientesPageRoutingModule } from './eliminar-clientes-routing.module';

import { EliminarClientesPage } from './eliminar-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarClientesPageRoutingModule
  ],
  declarations: [EliminarClientesPage]
})
export class EliminarClientesPageModule {}
