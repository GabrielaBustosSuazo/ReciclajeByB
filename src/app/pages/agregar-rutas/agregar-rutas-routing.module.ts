import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRutasPage } from './agregar-rutas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRutasPageRoutingModule {}
