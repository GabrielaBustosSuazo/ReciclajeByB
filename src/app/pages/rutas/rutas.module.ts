import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { IonicModule } from '@ionic/angular';

import { RutasPageRoutingModule } from './rutas-routing.module';

import { RutasPage } from './rutas.page';
import { MenuRecolectorComponent } from 'src/app/components/menu-recolector/menu-recolector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutasPageRoutingModule,
    NgxQRCodeModule,
  ],
  declarations: [RutasPage, MenuRecolectorComponent],
})
export class RutasPageModule {}
