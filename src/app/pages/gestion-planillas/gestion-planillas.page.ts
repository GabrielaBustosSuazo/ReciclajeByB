import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-gestion-planillas',
  templateUrl: './gestion-planillas.page.html',
  styleUrls: ['./gestion-planillas.page.scss'],
})
export class GestionPlanillasPage implements OnInit {

  constructor(private platform: Platform,
    private navController: NavController,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10, async() => {
      const currenturl = this.router.url;
      if (currenturl != "/inicio-administrador"){
        this.navController.back();
      }
      else{
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
      }
  })
  }

}
