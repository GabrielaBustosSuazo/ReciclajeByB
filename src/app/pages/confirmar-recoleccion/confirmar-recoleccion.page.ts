import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-confirmar-recoleccion',
  templateUrl: './confirmar-recoleccion.page.html',
  styleUrls: ['./confirmar-recoleccion.page.scss'],
})
export class ConfirmarRecoleccionPage implements OnInit {
  qrData: any;
  constructor( private barcodeScanner: BarcodeScanner) { }

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

}
