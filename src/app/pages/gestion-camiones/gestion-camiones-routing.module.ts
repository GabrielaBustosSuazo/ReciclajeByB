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
        path: 'eliminar-camiones',
        children: [
          {
        path: '',
        loadChildren: () => import('../eliminar-camiones/eliminar-camiones.module').then( m=> m.EliminarCamionesPageModule)
      }
    ]
  },
  {
    path: 'modificar-camiones',
    children: [
      {
    path: '',
    loadChildren: () => import('../modificar-camiones/modificar-camiones.module').then( m=> m.ModificarCamionesPageModule)
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
  redirectTo: 'tabs/eliminar-camiones',
  pathMatch: 'full'
},
{
  path: '',
  redirectTo: 'tabs/modificar-camiones',
  pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCamionesPageRoutingModule {}
