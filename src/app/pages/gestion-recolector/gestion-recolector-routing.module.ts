import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionRecolectorPage } from './gestion-recolector.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestionRecolectorPage,
    children: [
      {
        path: 'agregar-recolectores',
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '../agregar-recolectores/agregar-recolectores.module'
              ).then((m) => m.AgregarRecolectoresPageModule),
          },
        ],
      },
      {
        path: 'listar-recolectores',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../listar-recolectores/listar-recolectores.module').then(
                (m) => m.ListarRecolectoresPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: 'tabs/agregar-recolectores',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs/listar-recolectores',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRecolectorPageRoutingModule {}
