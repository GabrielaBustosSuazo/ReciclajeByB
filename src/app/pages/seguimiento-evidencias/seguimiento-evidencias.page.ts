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
  evidencia: Evidencias;
  cliente: string;
  foto: any;
  

  constructor(private database: FirestoreService) {}
  evidencias: Evidencias[] = [];
  

  ngOnInit() {
    this.getEvidencias();
  }

  limpiar() {
    this.fechaElegida = undefined;
    setTimeout(function () {
      location.reload();
    }, 2000);
    console.log(this.fechaElegida);
  }

  SendDataonChange(event: any) {
    this.formatedDate = formatDate(this.fechaElegida, 'dd/MM/yyyy', 'en');
    console.log(this.formatedDate);
  }

  getEvidencias() {
    this.database.getCollection<Evidencias>('Evidencias').subscribe((res) => {
      if (res) {
        this.evidencias = res;
      }
    });
  }

  showImage(ev: Evidencias) {
    this.evidencia = {
      foto: '',
      comentario: '',
      id: '',
      clienteAsignado: '',
      recolectorAsignado: '',
      camionAsignado: '',
      fecha: '',
      hora: '',
    }
    this.evidencia = ev
    this.foto = this.evidencia.foto
    this.cliente = this.evidencia.clienteAsignado
    const imagen = document.querySelector('.evidencia__container');
    imagen.classList.toggle('absolute');
  }

  evidenciaClose() {
    const imagen = document.querySelector('.evidencia__container');
    imagen.classList.remove('absolute');
  }
}
