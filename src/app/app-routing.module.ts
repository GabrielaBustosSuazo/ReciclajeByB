import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'valoracion',
    pathMatch: 'full'
  },

  {
    path: 'valoracion',
    loadChildren: () => import('./pages/valoracion/valoracion.module').then( m => m.ValoracionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ingreso-evidencias',
    loadChildren: () => import('./pages/ingreso-evidencias/ingreso-evidencias.module').then( m => m.IngresoEvidenciasPageModule)
  },
  {
    path: 'inicio-administrador',
    loadChildren: () => import('./pages/inicio-administrador/inicio-administrador.module').then( m => m.InicioAdministradorPageModule)
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pages/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
  },
  {
    path: 'inicio-recolector',
    loadChildren: () => import('./pages/inicio-recolector/inicio-recolector.module').then( m => m.InicioRecolectorPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
     path: 'folder/:id',
     loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
