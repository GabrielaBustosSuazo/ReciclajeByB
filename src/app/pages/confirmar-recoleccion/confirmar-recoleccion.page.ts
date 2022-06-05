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
  encodeData: string;
  encodedData: any;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);
        this.qrData = barcodeData.text;
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  cancelar() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        this.qrData = barcodeData.text;
        console.log('Barcode data', this.qrData);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  async confirmacion() {
    const toast = await this.toastController.create({
      message: 'Registro de asistencia exitoso',
      duration: 2500,
    });
    toast.present();
    this.router.navigate(['/inicio-cliente']);
  }

  encodeText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        (encodedData) => {
          console.log(encodedData);
          this.encodedData = encodedData;
        },
        (err) => {
          console.log('Error occured : ' + err);
        }
      );
  }
}
