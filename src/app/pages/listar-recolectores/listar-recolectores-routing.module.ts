import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarRecolectoresPage } from './listar-recolectores.page';

const routes: Routes = [
  {
    path: '',
    component: ListarRecolectoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarRecolectoresPageRoutingModule {}
