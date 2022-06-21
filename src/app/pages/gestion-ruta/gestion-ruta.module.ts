import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionRutaPageRoutingModule } from './gestion-ruta-routing.module';

import { GestionRutaPage } from './gestion-ruta.page';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionRutaPageRoutingModule,
  ],
  declarations: [GestionRutaPage, MenuAdminComponent],
})
export class GestionRutaPageModule {}
