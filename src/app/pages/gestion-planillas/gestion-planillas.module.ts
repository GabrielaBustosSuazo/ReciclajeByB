import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionPlanillasPageRoutingModule } from './gestion-planillas-routing.module';

import { GestionPlanillasPage } from './gestion-planillas.page';
import { MenuAdminComponent } from 'src/app/components/menu-admin/menu-admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionPlanillasPageRoutingModule,
  ],
  declarations: [GestionPlanillasPage, MenuAdminComponent],
})
export class GestionPlanillasPageModule {}
