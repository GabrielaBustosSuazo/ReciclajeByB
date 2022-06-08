import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPlanillasPage } from './gestion-planillas.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestionPlanillasPage,
    children: [
      {
        path: 'agregar-planilla',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../seguimiento-planillas/seguimiento-planillas.module').then(
                (m) => m.SeguimientoPlanillasPageModule
              ),
          },
        ],
      },
      {
        path: 'listar-planilla',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../seguimiento-evidencias/seguimiento-evidencias.module').then(
                (m) => m.SeguimientoEvidenciasPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'tabs/agregar-planilla',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/listar-planilla',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPlanillasPageRoutingModule {}
