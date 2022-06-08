import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { RecoleccionExitosa } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

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
    private database: FirestoreService
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
      })
      .catch((err) => {
        console.log('Error', err);
      });

    console.log(typeof this.barcodeScanner);
  }

  cancelar() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        this.qrData = barcodeData.text;
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  async confirmacion() {
    const path = 'Recoleccion Exitosa';
    const id = this.database.getId();
    this.recoleccionExitosa.id = id;
    this.recoleccionExitosa.cliente =
      'La recolección pertenece al cliente ' +
      this.qrDataSplit2 +
      ' de la dirección ' +
      this.qrDataSplit3;
    this.recoleccionExitosa.hora = this.qrDataSplit1;
    this.recoleccionExitosa.fecha = this.qrDataSplit6;
    this.recoleccionExitosa.recolector = this.qrDataSplit4;
    this.recoleccionExitosa.camion = this.qrDataSplit5;

    this.database.createDoc(this.recoleccionExitosa, path, id).then(() => {
      console.log('Guardado con exito');
    });

    const toast = await this.toastController.create({
      message: 'Tu recolección ha sido confirmada',
      duration: 3000,
    });
    toast.present();
    this.router.navigate(['/valoraciones']);
  }
}