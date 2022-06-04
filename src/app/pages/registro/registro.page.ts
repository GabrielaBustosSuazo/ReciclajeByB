import { Component, OnInit } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';
import { Camiones, Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  rol : string;
  camiones: Camiones[] = [];
  usuario: Usuario = {
    uid: '',
    email: '',
    password: '',
    run: '',
    nombreUsuario: '',
    tipoUsuario: '',
    direccion: '',
    prefijo: '+569',
    telefono: '',
    comuna: '',
    tipoPlan: '',
    camionDesignado: ''
  };
  get email() {
    return this.usuariosForm.get('email');
  }
  get nombreUsuario() {
    return this.usuariosForm.get('nombreUsuario');
  }
  get password() {
    return this.usuariosForm.get('password');
  }
  
  get run() {
    return this.usuariosForm.get('run')
  }
  get direccion() {
    return this.usuariosForm.get('direccion')
  }
  get comuna(){
    return this.usuariosForm.get('comuna')
  }
  get telefono(){
    return this.usuariosForm.get('telefono')
  }
  get tipoUsuario() {
    return this.usuariosForm.get('tipoUsuario');
  }
  get tipoPlan(){
    return this.usuariosForm.get('tipoPlan')
  }
  get camionDesignado(){
    return this.usuariosForm.get('camionDesignado')
  }


  public errorMessages = {
    email: [
      { type: 'required', message: 'Email no puede estar vacío' },
      { type: 'pattern', message: 'Ingrese formato correcto: xxxx@xxxx.com' },
    ],
    nombreUsuario: [
      { type: 'required', message: 'Nombre de Usuario no puede estar vacío' },
    ],
    password: [
      { type: 'required', message: 'Password no puede estar vacía' },
      { type: 'minlength', message: 'Password debe tener min. 7 caracteres' },
    ],
    run: [
      { type: 'required', message: 'Run no puede estar vacío' },
      { type: 'pattern', message: 'Ingrese formato correcto: XX.XXX.XXX-X' },
    ],
    nombre: [{ type: 'required', message: 'Nombre no puede estar vacío' }],
    direccion: [
      { type: 'required', message: 'Dirección no puede estar vacío' },
    ],
    telefono: [
      { type: 'required', message: 'Teléfono no puede estar vacío' },
      { type: 'minlength', message: 'Teléfono debe tener 8 numeros' },
      { type: 'pattern', message: 'Teléfono no puede contener letras' },
    ],
    comuna: [{ type: 'required', message: 'Comuna no puede estar vacía' }],
    tipoUsuario: [
      { type: 'required', message: 'Debe seleccionar un tipo de usuario' },
    ],
    tipoPlan: [
      { type: 'required', message: 'Debe seleccionar un tipo de plan' },
    ],
    camionDesignado: [
      { type: 'required', message: 'Debe seleccionar un camión' },
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
    nombreUsuario: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(7)]],
    tipoUsuario: ['', [Validators.required]],
    tipoPlan: ['', [Validators.required]],
    camionDesignado: ['', [Validators.required]],
    run: [
      '',
      [
        Validators.required,
        Validators.pattern(/([0-9]{2}.[0-9].{3}.[0-9].-[0-9(k)(K)])/),
      ],
    ],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required,
                    Validators.pattern(/^[0-9]*$/)]],
    comuna: ['', [Validators.required]],
  });

  constructor(
    public firestoreauth: FirestoreauthService,
    public userInteraction: UserInteractionService,
    public firestore: FirestoreService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.getCamiones();
  }

  getCamiones() {
    this.firestore.getCollection<Camiones>('Camiones').subscribe((res) => {
      if (res) {
        this.camiones = res;
      }
    });
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
          this.usuario.comuna = '';
          this.usuario.direccion = '';
          this.usuario.run = '';
          this.usuario.telefono = '';
          return false;
        }
      });

    if (res) {
      const uid = await this.firestoreauth.getUid();
      this.usuario.uid = uid;
      this.crearUsuarios();
      this.firestoreauth.logout();
      this.usuario.email = '';
      this.usuario.password = '';
      this.usuario.nombreUsuario = '';
      this.usuario.tipoUsuario = '';
      this.usuario.comuna = '';
      this.usuario.direccion = '';
      this.usuario.run = '';
      this.usuario.telefono = '';

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

  crearUsuarios() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Usuarios';
    this.usuario.password = null;
    this.usuario.telefono = this.usuario.prefijo + this.usuario.telefono;
    if (this.usuario.camionDesignado === ''){
      this.usuario.camionDesignado = 'No aplica'
    }
    if (this.usuario.tipoPlan === ''){
      this.usuario.tipoPlan = 'No aplica'
    }
    console.log(this.usuario.camionDesignado)
    this.firestore.createDoc(this.usuario, path, this.usuario.uid).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Usuario registrado exitosamente');
    });
  }

  getUserInfo(uid: string){
    const path = 'Usuarios'
        const id = uid;
        this.firestore.getUserInfo<Usuario>(path, id).subscribe(respuesta => {
        console.log('respuesta ->', respuesta)
        this.rol = respuesta.tipoUsuario
        })
  }

}
