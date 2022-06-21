import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioClientePageRoutingModule } from './inicio-cliente-routing.module';

import { InicioClientePage } from './inicio-cliente.page';
import { MenuClienteComponent } from 'src/app/components/menu-cliente/menu-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioClientePageRoutingModule,
  ],
  declarations: [InicioClientePage, MenuClienteComponent],
})
export class InicioClientePageModule {}
