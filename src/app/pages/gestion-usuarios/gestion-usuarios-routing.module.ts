import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionUsuariosPage } from './gestion-usuarios.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestionUsuariosPage,
    children:[
        {
          path: 'agregar-usuarios',
          children: [
            {
            path: '',
            loadChildren: () => import('../registro/registro.module').then( m => m.RegistroPageModule) 
        }
      ]
    },
    {
      path: 'listar-usuarios',
      children: [
        {
      path: '',
      loadChildren: () => import('../listar-usuarios/listar-usuarios.module').then( m=> m.ListarUsuariosPageModule)
    }
  ]
  },
    {
      path: '',
      redirectTo: 'tabs/agregar-usuarios',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/listar-usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionUsuariosPageRoutingModule {}
