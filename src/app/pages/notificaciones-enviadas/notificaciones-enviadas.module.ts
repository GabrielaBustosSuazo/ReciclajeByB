import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificacionesEnviadasPageRoutingModule } from './notificaciones-enviadas-routing.module';

import { NotificacionesEnviadasPage } from './notificaciones-enviadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificacionesEnviadasPageRoutingModule
  ],
  declarations: [NotificacionesEnviadasPage]
})
export class NotificacionesEnviadasPageModule {}
