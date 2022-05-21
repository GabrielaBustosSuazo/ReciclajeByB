import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: Usuario = {
    uid: '',
    email: '',
    password: '',
    nombreUsuario: '',
    tipoUsuario: ''
  }
  constructor(public firestoreauth: FirestoreauthService,
              public userInteraction: UserInteractionService,
              public firestore: FirestoreService) { }

   async ngOnInit() {
    const uid = await this.firestoreauth.getUid();
    console.log(uid)
  }


  async registrar(){
    const credenciales = {
      email: this.usuario.email,
      password: this.usuario.password
    };
    const res = await this.firestoreauth.registrar(credenciales.email, credenciales.password).catch( err => {
      console.log('error -> ', err)
    })
    const uid = await this.firestoreauth.getUid();
    this.usuario.uid = uid;
    this.crearUsuarios();
    this.usuario.email = '';
    this.usuario.password = '';
    this.usuario.nombreUsuario = '';
    this.usuario.tipoUsuario = '';
  }

  crearUsuarios(){
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Usuarios' 


    this.firestore.createDoc(this.usuario, path, this.usuario.uid).then(() =>
    {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Usuario registrado exitosamente');
    })
  }

  async salir(){
    this.firestoreauth.logout()
    console.log('Cerro sesión con exito')
  }
}
