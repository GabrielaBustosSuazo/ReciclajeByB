import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { RecoleccionExitosa } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-confirmar-recoleccion',
  templateUrl: './confirmar-recoleccion.page.html',
  styleUrls: ['./confirmar-recoleccion.page.scss'],
})
export class ConfirmarRecoleccionPage implements OnInit {
  qrData: any;
  qrDataSplit: any;
  qrDataSplit1: any;
  qrDataSplit2: any;
  qrDataSplit3: any;
  qrDataSplit4: any;
  qrDataSplit5: any;
  qrDataSplit6: any;
  recoleccionExitosa: RecoleccionExitosa = {
    id: '',
    hora: '',
    fecha: '',
    cliente: '',
    recolector: '',
    camion: '',
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastController: ToastController,
    private router: Router,
    private database: FirestoreService,
    private alertController: AlertController,
    private auth: FirestoreauthService,
    private userinterface: UserInteractionService,
   
  ) {}

  ngOnInit() {
    setTimeout(function () {
      const pantallaCarga = document.querySelector('.pantalla-carga');
      pantallaCarga.classList.toggle('mostrar');
    }, 3000);

    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        this.qrData = barcodeData.text;
        this.qrDataSplit = this.qrData.split(',');
        this.qrDataSplit1 = this.qrDataSplit[0];
        this.qrDataSplit2 = this.qrDataSplit[1];
        this.qrDataSplit3 = this.qrDataSplit[2];
        this.qrDataSplit4 = this.qrDataSplit[3];
        this.qrDataSplit5 = this.qrDataSplit[4];
        this.qrDataSplit6 = this.qrDataSplit[5];
      });

    console.log(typeof this.barcodeScanner);
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

  async logout() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '??Deseas cerrar sesi??n?',
      buttons: [
        {
          text: 'Permitir ',
          handler: (blah) => {
            setTimeout(function () {
              location.reload();
            }, 100);
            this.auth.logout();
            this.userinterface.presentToast('Cerrando sesi??n...');
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

  abrirMenu() {
    const menu = document.querySelector('.nav-icon2');
    menu.classList.toggle('open');

    const dropdown = document.querySelector('.dropdown2');
    dropdown.classList.toggle('open');
  }

  cancelar() {
    this.barcodeScanner
    .scan()
    .then((barcodeData) => {
      this.qrData = barcodeData.text;
      this.qrDataSplit = this.qrData.split(',');
      this.qrDataSplit1 = this.qrDataSplit[0];
      this.qrDataSplit2 = this.qrDataSplit[1];
      this.qrDataSplit3 = this.qrDataSplit[2];
      this.qrDataSplit4 = this.qrDataSplit[3];
      this.qrDataSplit5 = this.qrDataSplit[4];
      this.qrDataSplit6 = this.qrDataSplit[5];
    });

  console.log(typeof this.barcodeScanner);
  }

  async confirmacion() {
    const path = 'Recoleccion Exitosa';
    const id = this.database.getId();
    this.recoleccionExitosa.id = id;
    this.recoleccionExitosa.cliente =
      'La recolecci??n pertenece al cliente ' +
      this.qrDataSplit2 +
      ', con direcci??n en ' +
      this.qrDataSplit3;
    this.recoleccionExitosa.hora = this.qrDataSplit1;
    this.recoleccionExitosa.fecha = this.qrDataSplit6;
    this.recoleccionExitosa.recolector = this.qrDataSplit4;
    this.recoleccionExitosa.camion = this.qrDataSplit5;

    this.database.createDoc(this.recoleccionExitosa, path, id).then(() => {
      console.log('Guardado con exito');
    });

    const toast = await this.toastController.create({
      message: 'Tu recolecci??n ha sido confirmada',
      duration: 3000,
    });
    toast.present();
    this.router.navigate(['/valoraciones']);
  }
}
