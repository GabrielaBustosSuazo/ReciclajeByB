import { Component, OnInit } from '@angular/core';
import { Evidencias } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-seguimiento-evidencias',
  templateUrl: './seguimiento-evidencias.page.html',
  styleUrls: ['./seguimiento-evidencias.page.scss'],
})
export class SeguimientoEvidenciasPage implements OnInit {
  fechaElegida: string;
  formatedDate: string;

  constructor(private database: FirestoreService) {}
  evidencias: Evidencias[] = [];

  ngOnInit() {
    this.getEvidencias();
  }

  limpiar(){
    this.fechaElegida = undefined;
    setTimeout(function () {
      location.reload();
    }, 2000);
    console.log(this.fechaElegida)
  }

  SendDataonChange(event: any) {
    const contenedor = document.querySelector('.mensaje-error');

    const tabla = document.querySelector('.test');
    if (tabla != null) {
      contenedor.classList.remove('hidden');
      console.log(tabla != null, 'se ve');
    } else {
      console.log(tabla == null, 'no se ve');

      contenedor.classList.add('hidden');
    }
    this.formatedDate = formatDate(this.fechaElegida, 'dd/MM/yyyy', 'en');
    console.log(this.formatedDate);
  }

  getEvidencias() {
    this.database.getCollection<Evidencias>('Evidencias').subscribe((res) => {
      if (res) {
        this.evidencias = res;
        console.log(this.evidencias);
      }
    });
  }
}
