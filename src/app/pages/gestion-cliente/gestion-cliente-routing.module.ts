import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionClientePage } from './gestion-cliente.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestionClientePage,
    children: [
      {
        path: 'agregar-clientes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../agregar-clientes/agregar-clientes.module').then(
                (m) => m.AgregarClientesPageModule
              ),
          },
        ],
      },
      {
        path: 'listar-clientes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../listar-clientes/listar-clientes.module').then(
                (m) => m.ListarClientesPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'tabs/agregar-clientes',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/agregar-clientes',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'tabs/listar-clientes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionClientePageRoutingModule {}
