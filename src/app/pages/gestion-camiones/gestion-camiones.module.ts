import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCamionesPageRoutingModule } from './gestion-camiones-routing.module';

import { GestionCamionesPage } from './gestion-camiones.page';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCamionesPageRoutingModule,
  ],
  declarations: [GestionCamionesPage, MenuAdminComponent],
})
export class GestionCamionesPageModule {}
