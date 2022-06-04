import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarRecoleccionPage } from './confirmar-recoleccion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarRecoleccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarRecoleccionPageRoutingModule {}
