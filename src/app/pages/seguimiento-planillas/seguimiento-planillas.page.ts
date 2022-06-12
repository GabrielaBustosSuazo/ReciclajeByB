import { Component, OnInit } from '@angular/core';
import { RecoleccionExitosa } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-seguimiento-planillas',
  templateUrl: './seguimiento-planillas.page.html',
  styleUrls: ['./seguimiento-planillas.page.scss'],
})
export class SeguimientoPlanillasPage implements OnInit {
  fechaElegida: string; 
  formatedDate: string;
  constructor(private database: FirestoreService) { }
  recoleccionExitosa: RecoleccionExitosa[] = [];
  ngOnInit() {
    this.getRecoleccionesExitosas();
  }

  limpiar(){
    this.fechaElegida = undefined;
    setTimeout(function () {
      location.reload();
    }, 2000);
    console.log(this.fechaElegida)
  }

  SendDataonChange(event: any) {
    this.formatedDate = formatDate(this.fechaElegida, 'dd/MM/yyyy', 'en');
    console.log(this.formatedDate)
  }

  getRecoleccionesExitosas() {
    this.database.getCollection<RecoleccionExitosa>('Recoleccion Exitosa').subscribe((res) => {
      if (res) {
        this.recoleccionExitosa = res;
      }
    });
  }

}
