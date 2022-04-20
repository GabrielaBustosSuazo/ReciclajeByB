import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesEnviadasPage } from './notificaciones-enviadas.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesEnviadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesEnviadasPageRoutingModule {}
