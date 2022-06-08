import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionPlanillasPageRoutingModule } from './gestion-planillas-routing.module';

import { GestionPlanillasPage } from './gestion-planillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionPlanillasPageRoutingModule
  ],
  declarations: [GestionPlanillasPage]
})
export class GestionPlanillasPageModule {}
