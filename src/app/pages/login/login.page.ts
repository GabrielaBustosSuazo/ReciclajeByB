import { Component, OnInit } from '@angular/core';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Usuario } from 'src/app/models/models';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  tipoUsuario: any;
  credenciales = {
    email: null,
    password: null
  };

  get email() {
    return this.usuariosForm.get('email');
  }

  get password() {
    return this.usuariosForm.get('password');
  }

public errorMessages = {
    email: [
      { type: 'required', message: 'Email no puede estar vacío' },
      { type: 'pattern', message: 'Ingrese formato correcto: xxxx@xxxx.com' },
      ],
    password: [
      { type: 'required', message: 'Password no puede estar vacía' },
      { type: 'minlength', message: 'Password debe tener min. 7 caracteres' },
      ]
};

usuariosForm = this.formBuilder.group({
  email: [
    '',
    [
      Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ],
  ],
  password: ['', [Validators.required, Validators.minLength(7)]],

});



  constructor(public firestoreauth: FirestoreauthService,
              public userinteraction: UserInteractionService,
              public firestore: FirestoreService,
              public router: Router,
              public formBuilder: FormBuilder) {

                this.firestoreauth.stateUser().subscribe( resp => {
                    if(resp){
                      this.getUserInfo(resp.uid);
                      console.log('esta logeado');
                    }
                    else{
                      console.log('no esta logeado');
                    }
                });
               }

  ngOnInit() {

  }

  async login(){
    await this.userinteraction.presentLoading('Iniciando sesión...');
    const res = await this.firestoreauth.login(this.credenciales.email, this.credenciales.password).catch (error => {
      this.userinteraction.closeLoading();
      this.userinteraction.presentToast('Email o contraseña inválidos');

    });

    if(res){
      console.log('res ->', res);
    }
  }


getUserInfo(uid: string){
  const path = 'Usuarios';
      const id = uid;
      this.firestore.getUserInfo<Usuario>(path, id).subscribe(respuesta => {
      console.log('respuesta ->', respuesta);
      if(respuesta){
        this.tipoUsuario = respuesta.tipoUsuario;
        if (this.tipoUsuario === 'Cliente'){
          this.router.navigate(['/inicio-cliente']);
          this.userinteraction.closeLoading();
          this.userinteraction.presentToast('Ingresado exitosamente');
        }
        if (this.tipoUsuario === 'Recolector'){
          this.router.navigate(['/inicio-recolector']);
          this.userinteraction.closeLoading();
          this.userinteraction.presentToast('Ingresado exitosamente');
        }
        if (this.tipoUsuario === 'Admin'){
          this.router.navigate(['/inicio-administrador']);
          this.userinteraction.closeLoading();
          this.userinteraction.presentToast('Ingresado exitosamente');
        }
      }
    });
    }
}
