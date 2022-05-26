import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-inicio-recolector',
  templateUrl: './inicio-recolector.page.html',
  styleUrls: ['./inicio-recolector.page.scss'],
})
export class InicioRecolectorPage implements OnInit {
  nombreUsuario = ''
  constructor(private router: Router,
              private auth: FirestoreauthService,
              private userinterface: UserInteractionService,
              public alertController: AlertController,
              public firestore: FirestoreService) {
                this.auth.stateUser().subscribe( resp => {
                  if(resp){
                    this.getUserInfo(resp.uid)
                    console.log('esta logeado')
                  }
                  else{
                    console.log('no esta logeado')
                  }
              })
               }

  ngOnInit() {
  }

  gotoRevisarRutas() {
    this.router.navigate(['/rutas']);
  }

  gotoRevisarNotificaciones() {
    this.router.navigate(['/notificaciones-enviadas']);
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
              }, 100);
              this.auth.logout();
              this.userinterface.presentToast("Cerrando sesión...")
              this.router.navigate(['/login'])
              console.log('Confirma Permiso Permitido: yes');
            }
          }
        ]
      });
      await alert.present();
  
  }
  getUserInfo(uid: string){
    const path = 'Usuarios'
        const id = uid;
        this.firestore.getUserInfo<Usuario>(path, id).subscribe(respuesta => {
        console.log('respuesta ->', respuesta)
        this.nombreUsuario = respuesta.nombreUsuario
        })
  }

}
