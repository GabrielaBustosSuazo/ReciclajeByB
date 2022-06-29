import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-menu-recolector',
  templateUrl: './menu-recolector.component.html',
  styleUrls: ['./menu-recolector.component.scss'],
})
export class MenuRecolectorComponent implements OnInit {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private userInterface: UserInteractionService,
    private auth: FirestoreauthService
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
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
            this.auth.logout();
            this.userInterface.presentToast('Cerrando sesión...');
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
    const menu = document.querySelector('.nav-icon');
    const dropdown = document.querySelector('.dropdown');

    if (!menu.classList.contains('open')) {
      menu.classList.add('open');
      dropdown.classList.add('open');
      console.log('abriendo');
    } else {
      menu.classList.remove('open');
      dropdown.classList.remove('open');
      console.log('cerrando');
    }
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

  iralHome() {
    this.router.navigate(['/inicio-recolector']);
  }
}
