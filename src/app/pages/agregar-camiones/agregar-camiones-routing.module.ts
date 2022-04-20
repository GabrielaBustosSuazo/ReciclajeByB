import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarCamionesPage } from './agregar-camiones.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCamionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarCamionesPageRoutingModule {}
