import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCamionesPage } from './listar-camiones.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCamionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCamionesPageRoutingModule {}
