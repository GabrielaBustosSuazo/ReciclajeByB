import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UserInteractionService {

  loading: any;

  constructor(public toastController: ToastController,
              public loadingController: LoadingController,
              public alertController: AlertController) { }

  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
    });
    await this.loading.present();
  }

  async closeLoading(){
    await this.loading.dismiss();
  }

  async presentAlert(header: string, message: string) {
    let aceptar = false;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: [
         {
          text: 'Aceptar',
          handler: () => {
            aceptar = true
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss(); 
    return aceptar;
  }

}
