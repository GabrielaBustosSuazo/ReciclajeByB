import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarClientesPage } from './eliminar-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarClientesPageRoutingModule {}
