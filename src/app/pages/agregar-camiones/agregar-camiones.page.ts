import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-agregar-camiones',
  templateUrl: './agregar-camiones.page.html',
  styleUrls: ['./agregar-camiones.page.scss'],
})
export class AgregarCamionesPage implements OnInit {


  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
  }

  getClientes(){
    this.firestore.getCollection()
  }

}
