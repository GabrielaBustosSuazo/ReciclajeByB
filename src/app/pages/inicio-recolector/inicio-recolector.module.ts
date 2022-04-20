import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioRecolectorPageRoutingModule } from './inicio-recolector-routing.module';

import { InicioRecolectorPage } from './inicio-recolector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioRecolectorPageRoutingModule
  ],
  declarations: [InicioRecolectorPage]
})
export class InicioRecolectorPageModule {}
