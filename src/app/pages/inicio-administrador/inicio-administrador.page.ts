import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { allowedNodeEnvironmentFlags } from 'process';
import { Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.page.html',
  styleUrls: ['./inicio-administrador.page.scss'],
})
export class InicioAdministradorPage implements OnInit {
  today: any;
  nombreUsuario = '';

  constructor(private router:Router,
              private auth: FirestoreauthService,
              private userinterface: UserInteractionService,
              public alertController: AlertController,
              private firestore: FirestoreService,
              private platform: Platform) { 
                this.auth.stateUser().subscribe( resp => {
                  if(resp){
                    this.getUserInfo(resp.uid)
                    console.log('esta logeado')
                  }
                  else{
                    console.log('no esta logeado')
                  }
              })

              this.platform.backButton.subscribeWithPriority(1, () => {
                console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
              })

              }

  ngOnInit() {
    this.today = Date.now();
    this.platform.backButton.subscribeWithPriority(10, async() => {
      const alert = await this.alertController.create({
        header:'Acción no permitida',
        message:'No puedes volver atrás sin cerrar sesión',
        buttons: [
          {
            text: 'Volver a la app',
            handler: () => {
              this.router.navigate(['/inicio-administrador'])
            }
          }
        ]
      })
      await alert.present();
    })
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

  seguimientoPlanillas(){
    this.router.navigate(['/gestion-planillas']);
  }

  agregarUsuarios(){
    this.router.navigate(['/gestion-usuarios']);
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
