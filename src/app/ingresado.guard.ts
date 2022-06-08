import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './models/models';
import { FirestoreService } from './services/firestore.service';
import { FirestoreauthService } from './services/firestoreauth.service';

@Injectable({
  providedIn: 'root'
})
export class IngresadoGuard implements CanActivate {
  flag: boolean;
  perfil: string;
  constructor(public firestoreauth: FirestoreauthService,
              public firestore: FirestoreService,
              public router: Router){
    this.firestoreauth.stateUser().subscribe( resp => {
      if(resp){
        this.flag = true;
        console.log('esta logeado')
      }
      else{
        this.flag = false;
        console.log('no esta logeado')
      }
  })
  }
    getUserInfo(uid: string){
      const path = 'Usuarios'
          const id = uid;
          this.firestore.getUserInfo<Usuario>(path, id).subscribe(respuesta => {
          console.log('respuesta ->', respuesta)
          respuesta.tipoUsuario = this.perfil;
        })
      }
      canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(!this.flag){
          this.router.navigate(['/login']);
          console.log('No tienes los permisos para acceder a esta pagina.');
          return false;
      }
      return true;
    }
  }
    