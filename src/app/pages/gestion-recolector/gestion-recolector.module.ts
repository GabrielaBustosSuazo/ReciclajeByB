import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionRecolectorPageRoutingModule } from './gestion-recolector-routing.module';

import { GestionRecolectorPage } from './gestion-recolector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionRecolectorPageRoutingModule
  ],
  declarations: [GestionRecolectorPage]
})
export class GestionRecolectorPageModule {}
