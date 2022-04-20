import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarCamionesPage } from './eliminar-camiones.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarCamionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarCamionesPageRoutingModule {}
