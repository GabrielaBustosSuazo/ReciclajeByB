import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioRecolectorPage } from './inicio-recolector.page';

const routes: Routes = [
  {
    path: '',
    component: InicioRecolectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioRecolectorPageRoutingModule {}
