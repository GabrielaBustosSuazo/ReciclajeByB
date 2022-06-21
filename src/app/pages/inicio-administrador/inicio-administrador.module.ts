import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAdministradorPageRoutingModule } from './inicio-administrador-routing.module';

import { InicioAdministradorPage } from './inicio-administrador.page';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAdministradorPageRoutingModule,
  ],
  declarations: [InicioAdministradorPage, MenuAdminComponent],
})
export class InicioAdministradorPageModule {}
