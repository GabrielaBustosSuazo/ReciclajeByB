import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarRecolectoresPage } from './agregar-recolectores.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarRecolectoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarRecolectoresPageRoutingModule {}
