import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from './models/models';
import { FirestoreService } from './services/firestore.service';
import { FirestoreauthService } from './services/firestoreauth.service';

@Injectable({
  providedIn: 'root'
})
export class NoingresadoGuard implements CanActivate {
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
        this.flag= false;
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
    if(this.flag){
      if(this.perfil === "Cliente"){
        this.router.navigate(['/inicio-cliente'])
      }
      else if(this.perfil === "Recolector"){
        this.router.navigate(['/inicio-recolector'])
      }
      else if(this.perfil === "Admin"){
        this.router.navigate(['/inicio-administrador'])
      }
      console.log('Sesion iniciada, debes cerrar sesion para volver al login.');
        return false;
    }
    else{
      return true;
    }
  }
}

