import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
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
  get email() {
    return this.usuariosForm.get('email');
  }
  get nombreUsuario() {
    return this.usuariosForm.get('nombreUsuario');
  }
  get password() {
    return this.usuariosForm.get('password');
  }
  get tipoUsuario() {
    return this.usuariosForm.get('tipoUsuario');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email no puede estar vacío' },
      { type: 'pattern', message: 'Ingrese formato correcto: xxxx@xxxx.com' },
    ],
    nombreUsuario: [
      { type: 'required', message: 'Nombre de Usuario no puede estar vacío' }],
    password: [
      { type: 'required', message: 'Password no puede estar vacía' },
      { type: 'minlength', message: 'Password debe tener min. 7 caracteres' },
    ],
    tipoUsuario: [
      { type: 'required', message: 'Debe seleccionar un tipo de usuario' },
  
    ],
  };

  usuariosForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]
    ],
    nombreUsuario: [
      '',
      [
        Validators.required
      ]
    ],
    password: [
      '', 
      [
        Validators.required,
        Validators.minLength(7),
      ]
    ],
    tipoUsuario: [
      '', 
      [
        Validators.required
      ]
    ],
  });


  constructor(public firestoreauth: FirestoreauthService,
              public userInteraction: UserInteractionService,
              public firestore: FirestoreService,
              private formBuilder: FormBuilder) { }

   async ngOnInit() {
    const uid = await this.firestoreauth.getUid();
    console.log(uid)
  }



  async registrar() {
    const credenciales = {
      email: this.usuario.email,
      password: this.usuario.password,
    };
    const res = await this.firestoreauth
      .registrar(credenciales.email, credenciales.password)
      .catch((err) => {
        if (err) {
          this.userInteraction.presentAlert(
            'Alerta',
            'El email ingresado ya está registrado'
          );
          this.usuario.email = '';
          this.usuario.password = '';
          this.usuario.nombreUsuario = '';
          this.usuario.tipoUsuario = '';
          return false;
          }
      });

    if (res) {
      const uid = await this.firestoreauth.getUid();
      this.usuario.uid = uid;
      this.crearUsuarios();
      this.usuario.email = '';
      this.usuario.password = '';
      this.usuario.nombreUsuario = '';
      this.usuario.tipoUsuario = '';
      setTimeout(function () {
        const errores = document.querySelectorAll('.error-message');
        const input = document.querySelectorAll('input');
        const ionSelect = document.querySelectorAll('ion-select');
  
        errores.forEach((element) => {
          (element as HTMLElement).style.display = 'none';
        });
        input.forEach((element) => {
          (element as HTMLElement).classList.toggle('ng-touched');
        });
        ionSelect.forEach((element) => {
          (element as HTMLElement).classList.toggle('ng-touched');
        });
      }, 0);
  
      setTimeout(function () {
        location.reload();
      }, 2000);
    }
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
