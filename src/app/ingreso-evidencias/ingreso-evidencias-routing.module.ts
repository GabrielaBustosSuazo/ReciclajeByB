import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoEvidenciasPage } from './ingreso-evidencias.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoEvidenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoEvidenciasPageRoutingModule {}
