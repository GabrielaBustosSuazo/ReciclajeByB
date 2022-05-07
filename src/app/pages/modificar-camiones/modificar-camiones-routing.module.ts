import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarCamionesPage } from './modificar-camiones.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarCamionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarCamionesPageRoutingModule {}
