import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';
import { canActivate } from '@angular/fire/compat/auth-guard';



const uidAdmin = 'skozV1H3vhZex1kC027MgO4Alef1';
const onlyAdmin = () => map( ( user: any ) => !!user && (user.uid === uidAdmin));
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),

  },
  {
    path: 'valoraciones',
    loadChildren: () =>
      import('./pages/valoraciones/valoraciones.module').then(
        (m) => m.ValoracionesPageModule
      ),

  },
  {
    path: 'ingreso-evidencia',
    loadChildren: () =>
      import('./pages/ingreso-evidencia/ingreso-evidencia.module').then(
        (m) => m.IngresoEvidenciaPageModule
      ),

  },

  {
    path: 'inicio-administrador',
    loadChildren: () =>
      import('./pages/inicio-administrador/inicio-administrador.module').then(
        (m) => m.InicioAdministradorPageModule
      ),
      ...canActivate(onlyAdmin),

  },
  {
    path: 'inicio-cliente',
    loadChildren: () =>
      import('./pages/inicio-cliente/inicio-cliente.module').then(
        (m) => m.InicioClientePageModule
      ),

  },
  {
    path: 'inicio-recolector',
    loadChildren: () =>
      import('./pages/inicio-recolector/inicio-recolector.module').then(
        (m) => m.InicioRecolectorPageModule
      ),

  },
  {
    path: 'notificaciones',
    loadChildren: () =>
      import('./pages/notificaciones/notificaciones.module').then(
        (m) => m.NotificacionesPageModule
      ),

  },
  {
    path: 'seguimiento-planillas',
    loadChildren: () =>
      import('./pages/seguimiento-planillas/seguimiento-planillas.module').then(
        (m) => m.SeguimientoPlanillasPageModule,
      ),
      ...canActivate(onlyAdmin)

  },
  {
    path: 'seguimiento-evidencias',
    loadChildren: () =>
      import(
        './pages/seguimiento-evidencias/seguimiento-evidencias.module').then(
          (m) => m.SeguimientoEvidenciasPageModule
        ),
        ...canActivate(onlyAdmin)
  },
  {
    path: 'rutas',
    loadChildren: () =>
      import('./pages/rutas/rutas.module').then((m) => m.RutasPageModule),

  },
  {
    path: 'notificaciones-enviadas',
    loadChildren: () =>
      import(
        './pages/notificaciones-enviadas/notificaciones-enviadas.module'
      ).then((m) => m.NotificacionesEnviadasPageModule),

  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () =>
      import('./pages/recuperar-contrasena/recuperar-contrasena.module').then(
        (m) => m.RecuperarContrasenaPageModule
      ),
  },
  {
    path: 'gestion-camiones',
    loadChildren: () =>
      import('./pages/gestion-camiones/gestion-camiones.module').then(
        (m) => m.GestionCamionesPageModule
      ),
      ...canActivate(onlyAdmin)
  },
  {
    path: 'gestion-ruta',
    loadChildren: () =>
      import('./pages/gestion-ruta/gestion-ruta.module').then(
        (m) => m.GestionRutaPageModule
      ),
      ...canActivate(onlyAdmin)
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () =>
      import('./pages/gestion-usuarios/gestion-usuarios.module').then(
        (m) => m.GestionUsuariosPageModule
      ),
      ...canActivate(onlyAdmin)
  },
  {
    path: 'confirmar-recoleccion',
    loadChildren: () => import('./pages/confirmar-recoleccion/confirmar-recoleccion.module').then(
      m => m.ConfirmarRecoleccionPageModule
      ),


  },
  {
    path: 'gestion-planillas',
    loadChildren: () => import('./pages/gestion-planillas/gestion-planillas.module').then( m => m.GestionPlanillasPageModule
    ),
      ...canActivate(onlyAdmin)

  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
