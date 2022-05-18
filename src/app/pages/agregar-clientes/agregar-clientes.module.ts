import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarClientesPageRoutingModule } from './agregar-clientes-routing.module';

import { AgregarClientesPage } from './agregar-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgregarClientesPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AgregarClientesPage]
})
export class AgregarClientesPageModule {}
