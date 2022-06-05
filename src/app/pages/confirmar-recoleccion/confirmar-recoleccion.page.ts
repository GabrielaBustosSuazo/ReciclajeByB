import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

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

  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastController: ToastController,
    private router: Router
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
    const toast = await this.toastController.create({
      message: 'Tu recolección ha sido confirmada',
      duration: 3000,
    });
    toast.present();
    this.router.navigate(['/valoraciones']);
  }
}
