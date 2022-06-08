import { Component, OnInit } from '@angular/core';
import { Evidencias } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-seguimiento-evidencias',
  templateUrl: './seguimiento-evidencias.page.html',
  styleUrls: ['./seguimiento-evidencias.page.scss'],
})
export class SeguimientoEvidenciasPage implements OnInit {

  constructor(private database: FirestoreService) { }
  evidencias: Evidencias[] = [];
  ngOnInit() {
    this.getEvidencias();
  }

  getEvidencias() {
    this.database.getCollection<Evidencias>('Evidencias').subscribe((res) => {
      if (res) {
        this.evidencias = res;
      }
    });
  }
}
