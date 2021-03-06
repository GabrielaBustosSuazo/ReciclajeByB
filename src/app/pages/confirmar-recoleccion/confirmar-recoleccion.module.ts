import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarRecoleccionPageRoutingModule } from './confirmar-recoleccion-routing.module';

import { ConfirmarRecoleccionPage } from './confirmar-recoleccion.page';
import { MenuClienteComponent } from 'src/app/components/menu-cliente/menu-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarRecoleccionPageRoutingModule,
  ],
  declarations: [ConfirmarRecoleccionPage, MenuClienteComponent],
})
export class ConfirmarRecoleccionPageModule {}
