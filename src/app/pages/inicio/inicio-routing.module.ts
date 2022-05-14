import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../login/login.module').then((m) => m.LoginPageModule),
          },
        ],
      },
      {
        path: 'registro',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../registro/registro.module').then(
                (m) => m.RegistroPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'tabs/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/registro',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
