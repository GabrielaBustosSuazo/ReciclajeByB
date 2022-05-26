import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.page.html',
  styleUrls: ['./inicio-administrador.page.scss'],
})
export class InicioAdministradorPage implements OnInit {
  today: any;
  isInLogin = false;

  constructor(private router:Router,
              private auth: FirestoreauthService,
              private userinterface: UserInteractionService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.today = Date.now();
  }

  agregarRutas() {
    this.router.navigate(['/agregar-rutas']);
  }

  agregarClientes() {
    this.router.navigate(['/agregar-clientes']);
  }

  agregarRecolectores() {
    this.router.navigate(['/agregar-recolectores']);
  }

  agregarCamiones() {
    this.router.navigate(['/agregar-camiones']);
  }

  seguimientoPlanillas(){
    this.router.navigate(['/seguimiento-planillas']);
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
              setTimeout(function () {
                location.reload();
              }, 0);
              this.auth.logout();
              this.router.navigate(['/login'])
              console.log('Confirma Permiso Permitido: yes');
            }
          }
        ]
      });
      await alert.present();
  
  }
}