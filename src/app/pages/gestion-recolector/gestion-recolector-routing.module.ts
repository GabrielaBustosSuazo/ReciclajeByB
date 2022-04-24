import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionRecolectorPage } from './gestion-recolector.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: GestionRecolectorPage,
    children:[
        {
          path: 'agregar-recolectores',
          children: [
            {
            path: '',
            loadChildren: () => import('../agregar-recolectores/agregar-recolectores.module').then( m => m.AgregarRecolectoresPageModule) 
        }
      ]
    },
        {
          path: 'eliminar-recolectores',
          children: [
            {
          path: '',
          loadChildren: () => import('../eliminar-recolectores/eliminar-recolectores.module').then( m => m.EliminarRecolectoresPageModule)
        }
      ]
    },
    {
      path: '',
      redirectTo: 'tabs/agregar-recolectores',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/eliminar-recolectores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionRecolectorPageRoutingModule {}
