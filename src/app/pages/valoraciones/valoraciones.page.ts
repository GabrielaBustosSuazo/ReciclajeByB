import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.page.html',
  styleUrls: ['./valoraciones.page.scss'],
})
export class ValoracionesPage implements OnInit {
  comentario: string;
  constructor(
    private toastController: ToastController,
    private router: Router,
    private alertController: AlertController,
    private firestoreauth: FirestoreauthService,
    private userinterface: UserInteractionService,
    private platform: Platform,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currenturl = this.router.url;
      if (currenturl === '/valoraciones') {
        const alert = await this.alertController.create({
          header: 'Acción no permitida',
          message: 'No puedes volver atrás',
          buttons: [
            {
              text: 'Volver a valoraciones',
              handler: () => {
                this.router.navigate(['/valoraciones']);
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

  rating1() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.add('hidden');
    estrellaLlena3.classList.add('hidden');
    estrellaLlena4.classList.add('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating2() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.add('hidden');
    estrellaLlena4.classList.add('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating3() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.remove('hidden');
    estrellaLlena4.classList.add('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating4() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.remove('hidden');
    estrellaLlena4.classList.remove('hidden');
    estrellaLlena5.classList.add('hidden');
  }
  rating5() {
    const estrellaLlena1 = document.querySelector('.estrella-fill1');
    const estrellaLlena2 = document.querySelector('.estrella-fill2');
    const estrellaLlena3 = document.querySelector('.estrella-fill3');
    const estrellaLlena4 = document.querySelector('.estrella-fill4');
    const estrellaLlena5 = document.querySelector('.estrella-fill5');

    estrellaLlena1.classList.remove('hidden');
    estrellaLlena2.classList.remove('hidden');
    estrellaLlena3.classList.remove('hidden');
    estrellaLlena4.classList.remove('hidden');
    estrellaLlena5.classList.remove('hidden');
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones']);
  }
  gotoConfirmar() {
    this.router.navigate(['/confirmar-recoleccion']);
  }

  lectorQr() {
    this.router.navigate(['/confirmar-recoleccion']);
  }

  iralHome() {
    this.router.navigate(['/inicio-cliente']);
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
            }, 100);
            this.firestoreauth.logout();
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

  abrirMenu() {
    const menu = document.querySelector('.nav-icon4');
    menu.classList.toggle('open');

    const dropdown = document.querySelector('.dropdown4');
    dropdown.classList.toggle('open');
  }

  async confirmacion() {
    const toast = await this.toastController.create({
      message: 'Gracias por tus comentarios.',
      duration: 3000,
    });
    toast.present();
    this.comentario = '';
    this.router.navigate(['/inicio-cliente']);
  }
}
