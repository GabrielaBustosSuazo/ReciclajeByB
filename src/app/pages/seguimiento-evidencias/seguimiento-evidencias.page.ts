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
 
  
  constructor(private database: FirestoreService,
              ) {
                

 
  }
  evidencias: Evidencias[] = [];

  ngOnInit() {
    this.getEvidencias();
    
  }

  SendDataonChange(event: any) {
      this.formatedDate = formatDate(this.fechaElegida, 'dd/MM/yyyy', 'en');
      console.log(this.formatedDate)
    }
  

  getEvidencias() {
    this.database.getCollection<Evidencias>('Evidencias').subscribe((res) => {
      if (res) {
        this.evidencias = res;
      }
    });
  }
}
