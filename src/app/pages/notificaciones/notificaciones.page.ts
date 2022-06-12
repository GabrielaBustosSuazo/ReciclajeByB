import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {

  constructor(private router: Router,
              private auth: FirestoreauthService,
              private userinterface: UserInteractionService,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  abrirMenu() {
    const menu = document.getElementById('nav-icon5');
    menu.classList.toggle('open');

    const dropdown = document.getElementById('dropdown1');
    dropdown.classList.toggle('open');
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

  gotoNotifications() {
    this.router.navigate(['/notificaciones']);
  }
  gotoConfirmar() {
    this.router.navigate(['/confirmar-recoleccion']);
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
