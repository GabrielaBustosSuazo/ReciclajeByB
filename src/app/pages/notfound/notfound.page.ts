import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.page.html',
  styleUrls: ['./notfound.page.scss'],
})
export class NotfoundPage implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private userinterface: UserInteractionService,
    private firestoreauth: FirestoreauthService
  ) {}

  ngOnInit() {}

  turnBack() {
    this.router.navigate(['/rutas']);
  }

  notFound() {
    this.router.navigate(['/notfound']);
  }

  iralHome() {
    this.router.navigate(['/inicio-recolector']);
  }

  gotoRutas() {
    this.router.navigate(['/rutas']);
  }

  abrirMenu() {
    const menu = document.querySelector('.nav-icon3');
    menu.classList.toggle('open');

    const dropdown = document.querySelector('.dropdown3');
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
}
