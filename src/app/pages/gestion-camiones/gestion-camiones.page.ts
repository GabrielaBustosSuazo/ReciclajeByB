import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-gestion-camiones',
  templateUrl: './gestion-camiones.page.html',
  styleUrls: ['./gestion-camiones.page.scss'],
})
export class GestionCamionesPage implements OnInit {
  constructor(
    private platform: Platform,
    private navController: NavController,
    private router: Router,
    private alertController: AlertController,
    private auth: FirestoreauthService,
    private userinterface: UserInteractionService
  ) {}

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currenturl = this.router.url;
      if (currenturl != '/inicio-administrador') {
        this.navController.back();
      } else {
        const alert = await this.alertController.create({
          header: 'Acción no permitida',
          message: 'No puedes volver atrás sin cerrar sesión',
          buttons: [
            {
              text: 'Volver a la app',
              handler: () => {
                this.router.navigate(['/inicio-administrador']);
              },
            },
          ],
        });

        await alert.present();
      }
    });
  }
  abrirMenu() {
    const menu = document.querySelector('.nav-icon2');
    menu.classList.toggle('open');

    const dropdown = document.querySelector('.dropdown2');
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
}
