import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioRecolectorPageRoutingModule } from './inicio-recolector-routing.module';

import { InicioRecolectorPage } from './inicio-recolector.page';
import { MenuRecolectorComponent } from 'src/app/components/menu-recolector/menu-recolector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioRecolectorPageRoutingModule,
  ],
  declarations: [InicioRecolectorPage, MenuRecolectorComponent],
})
export class InicioRecolectorPageModule {}
