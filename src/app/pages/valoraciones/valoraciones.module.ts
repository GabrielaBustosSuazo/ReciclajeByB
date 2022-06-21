import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoracionesPageRoutingModule } from './valoraciones-routing.module';
import { MenuClienteComponent } from 'src/app/components/menu-cliente/menu-cliente.component';

import { ValoracionesPage } from './valoraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoracionesPageRoutingModule,
  ],
  declarations: [ValoracionesPage, MenuClienteComponent],
})
export class ValoracionesPageModule {}
