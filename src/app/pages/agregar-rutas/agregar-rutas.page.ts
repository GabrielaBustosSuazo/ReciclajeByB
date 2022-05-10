import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-agregar-rutas',
  templateUrl: './agregar-rutas.page.html',
  styleUrls: ['./agregar-rutas.page.scss'],
})
export class AgregarRutasPage implements OnInit {

  constructor(private database: FirestoreService) { }

  ngOnInit() {
  }

}
