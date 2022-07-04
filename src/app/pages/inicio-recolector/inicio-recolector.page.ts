import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inicio-recolector',
  templateUrl: './inicio-recolector.page.html',
  styleUrls: ['./inicio-recolector.page.scss'],
})
export class InicioRecolectorPage implements OnInit {
  nombreUsuario = '';
  patente = '';
  constructor(
    private router: Router,
    private auth: FirestoreauthService,
    private userinterface: UserInteractionService,
    public alertController: AlertController,
    public firestore: FirestoreService,
    public platform: Platform,
    public navController: NavController
  ) {
    this.auth.stateUser().subscribe((resp) => {
      if (resp) {
        this.getUserInfo(resp.uid);
        console.log('esta logeado');
      } else {
        console.log('no esta logeado');
      }
    });
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currenturl = this.router.url;
      if (currenturl === '/inicio-recolector') {
        const alert = await this.alertController.create({
          header: 'Acción no permitida',
          message: 'No puedes volver atrás sin cerrar sesión',
          buttons: [
            {
              text: 'Volver a la app',
              handler: () => {
                this.router.navigate(['/inicio-recolector']);
              },
            },
          ],
        });

        await alert.present();
      } else {
        this.navController.back();
      }
    });
  }

  abrirMenu() {
    const menu = document.querySelector('.nav-icon');
    menu.classList.toggle('open');

    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        {
          text: 'Permitir ',
          handler: (blah) => {
            setTimeout(function () {
              location.reload();
            }, 500);
            this.auth.logout();
            this.userinterface.presentToast('Cerrando sesión...');
            this.router.navigate(['/login']);
            console.log('Confirma Permiso Permitido: yes');
          },
        },
        {
          text: 'Denegar',
          handler: () => {
            console.log('Confirma Permiso Denegado: yes');
          },
        },
      ],
    });
    await alert.present();
  }

  iralHome() {
    this.router.navigate(['/inicio-recolector']);
  }

  gotoRutas() {
    this.router.navigate(['/rutas']);
  }

  getUserInfo(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    this.firestore.getUserInfo<Usuario>(path, id).subscribe((respuesta) => {
      console.log('respuesta ->', respuesta);
      this.nombreUsuario = respuesta.nombreUsuario;
      this.patente = respuesta.camionDesignado;
    });
  }
}

interface INotification {
  data: any;
  tokens: string[];
  notification: any;
}

interface Res {
  respuesta: string;
}
