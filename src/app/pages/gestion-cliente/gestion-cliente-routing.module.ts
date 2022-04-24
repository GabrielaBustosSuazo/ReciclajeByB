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
              loadChildren: () => import('../agregar-clientes/agregar-clientes.module').then( m => m.AgregarClientesPageModule)
          }
        ]
      },
      {
        path: 'eliminar-clientes',
        children: [
          {
              path: '',
              loadChildren: () => import('../eliminar-clientes/eliminar-clientes.module').then( m => m.EliminarClientesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/agregar-clientes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/agregar-clientes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionClientePageRoutingModule {}



