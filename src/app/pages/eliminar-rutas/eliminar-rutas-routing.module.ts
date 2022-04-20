import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarRutasPage } from './eliminar-rutas.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarRutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarRutasPageRoutingModule {}
