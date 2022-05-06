import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gestion-camiones',
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
  path: 'seguimiento-planillas',
  loadChildren: () => import('./pages/seguimiento-planillas/seguimiento-planillas.module').then( m => m.SeguimientoPlanillasPageModule)
  },
  {
    path: 'eliminar-rutas',
    loadChildren: () => import('./pages/eliminar-rutas/eliminar-rutas.module').then( m => m.EliminarRutasPageModule)
  },
  {
    path: 'seguimiento-evidencias',
    loadChildren: () => import('./pages/seguimiento-evidencias/seguimiento-evidencias.module').then( m => m.SeguimientoEvidenciasPageModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./pages/rutas/rutas.module').then( m => m.RutasPageModule)
  },
  {
    path: 'notificaciones-enviadas',
    loadChildren: () => import('./pages/notificaciones-enviadas/notificaciones-enviadas.module').then( m => m.NotificacionesEnviadasPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./pages/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'gestion-recolector',
    loadChildren: () => import('./pages/gestion-recolector/gestion-recolector.module').then( m => m.GestionRecolectorPageModule)
  },
  {
    path: 'gestion-camiones',
    loadChildren: () => import('./pages/gestion-camiones/gestion-camiones.module').then( m => m.GestionCamionesPageModule)
  },
  {
    path: 'gestion-cliente',
    loadChildren: () => import('./pages/gestion-cliente/gestion-cliente.module').then( m => m.GestionClientePageModule)
  },
  {
    path: 'gestion-ruta',
    loadChildren: () => import('./pages/gestion-ruta/gestion-ruta.module').then( m => m.GestionRutaPageModule)
  },
  {
    path: 'agregar-rutas',
  loadChildren: () => import('./pages/agregar-rutas/agregar-rutas.module').then( m => m.AgregarRutasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
