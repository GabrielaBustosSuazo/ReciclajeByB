import { Component, OnInit } from '@angular/core';
import { RecoleccionExitosa } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-seguimiento-planillas',
  templateUrl: './seguimiento-planillas.page.html',
  styleUrls: ['./seguimiento-planillas.page.scss'],
})
export class SeguimientoPlanillasPage implements OnInit {

  constructor(private database: FirestoreService) { }
  recoleccionExitosa: RecoleccionExitosa[] = [];
  ngOnInit() {
    this.getRecoleccionesExitosas();
  }

  getRecoleccionesExitosas() {
    this.database.getCollection<RecoleccionExitosa>('Recoleccion Exitosa').subscribe((res) => {
      if (res) {
        this.recoleccionExitosa = res;
      }
    });
  }

}
