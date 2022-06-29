import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.scss'],
})
export class MenuClienteComponent implements OnInit {
  constructor(
    private router: Router,
    public auth: FirestoreauthService,
    public userinterface: UserInteractionService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
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
