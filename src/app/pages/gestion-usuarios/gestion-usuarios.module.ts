import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionUsuariosPageRoutingModule } from './gestion-usuarios-routing.module';

import { GestionUsuariosPage } from './gestion-usuarios.page';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionUsuariosPageRoutingModule,
  ],
  declarations: [GestionUsuariosPage, MenuAdminComponent],
})
export class GestionUsuariosPageModule {}
