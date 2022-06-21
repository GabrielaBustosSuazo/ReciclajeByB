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

  ngOnInit() {}

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
            setTimeout(function () {
              location.reload();
            }, 100);
            this.auth.logout();
            this.userInterface.presentToast('Cerrando sesión...');
            this.router.navigate(['/login']);
            console.log('Confirma Permiso Permitido: yes');
          },
        },
      ],
    });
    await alert.present();
  }

  abrirMenu() {
    const menu = document.querySelector('.nav-icon');
    menu.classList.toggle('open');

    const dropdown = document.getElementById('dropdown');
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
}
