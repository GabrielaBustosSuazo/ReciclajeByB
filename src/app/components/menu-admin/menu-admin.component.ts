import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss'],
})
export class MenuAdminComponent implements OnInit {
  constructor(
    private router: Router,
    public auth: FirestoreauthService,
    public userinterface: UserInteractionService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    const menu = document.querySelector('.nav-icon');
    const dropdown = document.getElementById('dropdown');
    menu.classList.remove('open');
    dropdown.classList.remove('open');
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

  agregarRutas() {
    this.router.navigate(['/gestion-ruta']);
  }

  agregarClientes() {
    this.router.navigate(['/gestion-cliente']);
  }

  agregarRecolectores() {
    this.router.navigate(['/gestion-recolector']);
  }

  agregarCamiones() {
    this.router.navigate(['/gestion-camiones']);
  }

  seguimientoPlanillas() {
    this.router.navigate(['/gestion-planillas']);
  }

  agregarUsuarios() {
    this.router.navigate(['/gestion-usuarios']);
  }
  iralHome() {
    this.router.navigate(['/inicio-administrador']);
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
            setTimeout(function () {
              location.reload();
            }, 100);
            this.auth.logout();
            this.userinterface.presentToast('Cerrando sesión...');
            this.router.navigate(['/login']);
            console.log('Confirma Permiso Permitido: yes');
          },
        },
      ],
    });
    await alert.present();
  }
}
