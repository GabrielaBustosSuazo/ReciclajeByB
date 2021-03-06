import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCamionesPage } from './gestion-camiones.page';

const routes: Routes = [
  {
  path: 'tabs',
  component: GestionCamionesPage,
  children:[
      {
        path: 'agregar-camiones',
        children: [
          {
          path: '',
          loadChildren: () => import('../agregar-camiones/agregar-camiones.module').then( m => m.AgregarCamionesPageModule)
      }
    ]
  },
  {
    path: 'listar-camiones',
    children: [
      {
    path: '',
    loadChildren: () => import('../listar-camiones/listar-camiones.module').then( m=> m.ListarCamionesPageModule)
  }
]
},
  {
    path: '',
    redirectTo: 'tabs/agregar-camiones',
    pathMatch: 'full'
  }
  ]
},
{
  path: '',
  redirectTo: 'tabs/listar-camiones',
  pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCamionesPageRoutingModule {}
