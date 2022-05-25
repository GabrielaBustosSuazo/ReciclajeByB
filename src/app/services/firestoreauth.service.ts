import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreauthService {

  constructor(public auth: AngularFireAuth) {
    this.getUid();
   }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.auth.signOut();
  }

  registrar(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  async getUid() {
    const user = await this.auth.currentUser;
    if (user === null) {
      return null;
    } else {
       return user.uid;
    }
 }

 stateUser(){
   return this.auth.authState
 }
}
