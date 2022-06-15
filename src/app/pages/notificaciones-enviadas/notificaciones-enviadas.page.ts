import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-notificaciones-enviadas',
  templateUrl: './notificaciones-enviadas.page.html',
  styleUrls: ['./notificaciones-enviadas.page.scss'],
})
export class NotificacionesEnviadasPage implements OnInit {

  constructor(private router: Router,
    private alertController: AlertController,
    private userinterface: UserInteractionService,
    private auth: FirestoreauthService) { }

  ngOnInit() {
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
            }
          }, {
            text: 'Permitir',
            handler: () => {
              setTimeout(function() {
                location.reload();
              }, 100);
              this.auth.logout();
              this.userinterface.presentToast('Cerrando sesión...');
              this.router.navigate(['/login']);
              console.log('Confirma Permiso Permitido: yes');
            }
          }
        ]
      });
      await alert.present();

  }


  abrirMenu() {
    const menu = document.getElementById('nav-icon5');
    menu.classList.toggle('open');

    const dropdown = document.getElementById('dropdown2');
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

  gotoRutas(){
    this.router.navigate(['/rutas']);
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones-enviadas']);
  }
}
