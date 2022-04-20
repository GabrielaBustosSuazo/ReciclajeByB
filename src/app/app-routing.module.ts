import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-administrador',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'valoraciones',
    loadChildren: () => import('./pages/valoraciones/valoraciones.module').then( m => m.ValoracionesPageModule)
  },
  {
    path: 'ingreso-evidencia',
    loadChildren: () => import('./pages/ingreso-evidencia/ingreso-evidencia.module').then( m => m.IngresoEvidenciaPageModule)
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
    path: 'agregar-rutas',
    loadChildren: () => import('./pages/agregar-rutas/agregar-rutas.module').then( m => m.AgregarRutasPageModule)
  },
  {
    path: 'agregar-clientes',
    loadChildren: () => import('./pages/agregar-clientes/agregar-clientes.module').then( m => m.AgregarClientesPageModule)
  },
  {
    path: 'agregar-recolectores',
    loadChildren: () => import('./pages/agregar-recolectores/agregar-recolectores.module').then( m => m.AgregarRecolectoresPageModule)
  },
  {
    path: 'agregar-camiones',
    loadChildren: () => import('./pages/agregar-camiones/agregar-camiones.module').then( m => m.AgregarCamionesPageModule)
  },
  {
    path: 'seguimiento-planillas',
    loadChildren: () => import('./pages/seguimiento-planillas/seguimiento-planillas.module').then( m => m.SeguimientoPlanillasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
