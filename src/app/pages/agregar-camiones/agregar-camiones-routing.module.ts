import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AgregarCamionesPage } from './agregar-camiones.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarCamionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
})
export class AgregarCamionesPageRoutingModule {}
