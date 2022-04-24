import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionClientePageRoutingModule } from './gestion-cliente-routing.module';

import { GestionClientePage } from './gestion-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionClientePageRoutingModule
  ],
  declarations: [GestionClientePage]
})
export class GestionClientePageModule {}
