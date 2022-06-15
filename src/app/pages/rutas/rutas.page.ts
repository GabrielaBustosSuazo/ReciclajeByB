import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { Rutas, Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {
  rutas: Rutas[] = [];
  rutaActualizada: Rutas;
  cliente: string;
  datosCliente: string;
  createdCode: [string, string, string, string, string, string];
  usuario: Usuario[] = [];
  nombreUsuario: string;
  flag: boolean;
  constructor(
    private database: FirestoreService,
    private alertController: AlertController,
    private firestoreauth: FirestoreauthService,
    private router: Router,
    private userinterface: UserInteractionService,
    private http: HttpClient
  ) {
    this.firestoreauth.stateUser().subscribe((resp) => {
      if (resp) {
        this.getUserInfo(resp.uid);
        console.log('esta logeado');
      } else {
        console.log('no esta logeado');
      }
    });
  }

  ngOnInit() {
    this.getUsuarios();
    this.getRutas();
  }

  async actualizarRuta(rut: Rutas) {
    this.rutaActualizada = {
      camionAsignado: '',
      recolectorAsignado: '',
      clienteAsignado: '',
      direccion: '',
      comuna: '',
      fecha: '',
      hora: '',
      id: '',
      estado: '',
    };

    this.rutaActualizada = rut;
    this.cliente = this.rutaActualizada.clienteAsignado;
  }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    pager: true,
    spaceBetween: 10,
    autoplay: { delay: 5000 },
    speed: 2000,
  };

  getUsuarios() {
    this.database.getCollection<Usuario>('Usuarios').subscribe((res) => {
      if (res) {
        this.usuario = res;
      }
    });
  }

  getRutas() {
    this.database.getCollection<Rutas>('Rutas').subscribe((res) => {
      if (res) {
        this.rutas = res;
      }
    });
  }

  getUserInfo(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.database.getUserInfo<Usuario>(path, id).subscribe((respuesta) => {
      console.log('respuesta ->', respuesta);
      this.nombreUsuario = respuesta.nombreUsuario;
      console.log(this.nombreUsuario);
    });
  }

  newNotification() {

    const receptor = 'AIMkkbZzzwSVukwsbXLO4qxk6EI3'
    const path = 'Usuarios/';
    this.database.getDoc<any>(path, receptor).subscribe( res => {
          if (res) {
              const token = res.token;
              const dataNotification = {
                enlace: '/rutas',
              }
              const notification = {
                title: 'Recolector va en camino',
                body: 'Prepara tu reciclaje porque el recolector va en camino'
              };
              const data: INotification = {
                    data: dataNotification,
                    tokens: [token],
                    notification,
              }
              console.log(data)
              const url = 'https://us-central1-reciclaje-bybbd.cloudfunctions.net/newNotification';
              return this.http.post<Res>(url, {data}).subscribe( res => {
                this.userinterface.presentToast('Notificación enviada correctamente');
                    console.log('respuesta newNotication() -> ', res);
                    
              });
          }

    });


}

  async confirmarRecoleccion() {
    const codigoQR = document.querySelector('.codigo-qr');
    const alert = await this.alertController.create({
      header: 'Confirmar recolección',
      message: '¿Deseas confirmar la recolección?',
      buttons: [
        {
          text: 'Denegar',
          handler: (blah) => {
            console.log('Confirma Permiso Denegado: yes');
          },
        },
        {
          text: 'Permitir',
          handler: () => {
            this.createdCode = [
              this.rutaActualizada.hora + ',',
              this.rutaActualizada.clienteAsignado + ',',
              this.rutaActualizada.direccion + ',',
              this.rutaActualizada.recolectorAsignado + ',',
              this.rutaActualizada.camionAsignado + ',',
              this.rutaActualizada.fecha + ',',
            ];
            console.log(this.createdCode);

            codigoQR.classList.add('absolute');
          },
        },
      ],
    });
    await alert.present();
  }

  abrirMenu() {
    const menu = document.getElementById('nav-icon33');
    menu.classList.toggle('open');

    const dropdown = document.getElementById('dropdown33');
    dropdown.classList.toggle('open');
  }

  gotoRutas() {
    this.router.navigate(['/rutas']);
  }

  gotoRevisarRutas() {
    this.router.navigate(['/rutas']);
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones-enviadas']);
  }

  gotoRevisarNotificaciones() {
    this.router.navigate(['/notificaciones-enviadas']);
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        {
          text: 'Denegar',
          handler: (blah) => {
            console.log('Confirma Permiso Denegado: yes');
          },
        },
        {
          text: 'Permitir',
          handler: () => {
            setTimeout(function() {
              location.reload();
            }, 100);
            this.firestoreauth.logout();
            this.userinterface.presentToast('Cerrando sesión...');
            this.router.navigate(['/login']);
            console.log('Confirma Permiso Permitido: yes');
          },
        },
      ],
    });
    await alert.present();
  }

  cancelarQr() {
    const codigoQR = document.querySelector('.codigo-qr');
    codigoQR.classList.toggle('absolute');
  }

  desaparecerRuta() {
    const codigoQR = document.querySelector('.codigo-qr');
    codigoQR.classList.toggle('absolute');
    const path = 'Rutas';
    this.rutaActualizada.estado = 'Finalizado';
    this.database
      .createDoc(this.rutaActualizada, path, this.rutaActualizada.id)
      .then(() => {
        console.log(this.rutaActualizada.estado);
      });
  }

  async recoleccionFallida(rut: Rutas) {
    const alert = await this.alertController.create({
      header: 'Rechazar recolección',
      message: '¿La recolección fue fallida?',
      buttons: [
        {
          text: 'Denegar',
          handler: (blah) => {
            console.log('Confirma Permiso Denegado: yes');
          },
        },
        {
          text: 'Permitir',
          handler: () => {
            this.rutaActualizada = {
              camionAsignado: '',
              recolectorAsignado: '',
              clienteAsignado: '',
              direccion: '',
              comuna: '',
              fecha: '',
              hora: '',
              id: '',
              estado: '',
            };

            this.rutaActualizada = rut;
            this.datosCliente =
              'Evidencia perteneciente al cliente ' +
              this.rutaActualizada.clienteAsignado +
              ', con dirección en' +
              this.rutaActualizada.direccion;
            const navigationExtras: NavigationExtras = {
              state: {
                cli: this.datosCliente,
                estado: this.rutaActualizada.estado,
                id: this.rutaActualizada.id,
                fecha: this.rutaActualizada.fecha,
                hora: this.rutaActualizada.hora,
              },
            };
            this.router.navigate(['/ingreso-evidencia'], navigationExtras);
          },
        },
      ],
    });
    await alert.present();
  }

  enviarDireccion(rut: Rutas) {
    this.rutaActualizada = {
      camionAsignado: '',
      recolectorAsignado: '',
      clienteAsignado: '',
      direccion: '',
      comuna: '',
      fecha: '',
      hora: '',
      id: '',
      estado: '',
    };
    this.rutaActualizada = rut;
    const navigationExtras: NavigationExtras = {
      state: {
        dir: this.rutaActualizada.direccion,
      },
    };
    this.router.navigate(['/googlemaps'], navigationExtras);
  }
}


interface INotification {
  data: any;
  tokens: string[];
  notification: any
}


interface Res {
  respuesta: string;
}

