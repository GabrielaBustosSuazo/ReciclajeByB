import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionRutaPage } from './gestion-ruta.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestionRutaPage,
    children: [
      {
        path: 'agregar-rutas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../agregar-rutas/agregar-rutas.module').then(
                (m) => m.AgregarRutasPageModule
              ),
          },
        ],
      },
      {
        path: 'listar-rutas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../listar-rutas/listar-rutas.module').then(
                (m) => m.ListarRutasPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'tabs/agregar-rutas',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/listar-rutas',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRutaPageRoutingModule {}
