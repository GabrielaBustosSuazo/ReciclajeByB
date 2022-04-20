import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarRecolectoresPage } from './eliminar-recolectores.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarRecolectoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarRecolectoresPageRoutingModule {}
