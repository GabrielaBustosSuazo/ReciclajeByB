import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoEvidenciaPage } from './ingreso-evidencia.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoEvidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoEvidenciaPageRoutingModule {}
