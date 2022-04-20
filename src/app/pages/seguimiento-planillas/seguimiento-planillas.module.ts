import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoPlanillasPageRoutingModule } from './seguimiento-planillas-routing.module';

import { SeguimientoPlanillasPage } from './seguimiento-planillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoPlanillasPageRoutingModule
  ],
  declarations: [SeguimientoPlanillasPage]
})
export class SeguimientoPlanillasPageModule {}
