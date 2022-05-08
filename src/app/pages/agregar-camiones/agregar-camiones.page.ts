import { Component, OnInit } from '@angular/core';
import { Camiones } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-agregar-camiones',
  templateUrl: './agregar-camiones.page.html',
  styleUrls: ['./agregar-camiones.page.scss'],
})
export class AgregarCamionesPage implements OnInit {

  data: Camiones = {
      patente: '',
      marca: '',
      modelo: '',
      anno: '',
      id: ''
  }


  constructor(private database : FirestoreService, 
              private userInteraction : UserInteractionService) { }

  ngOnInit() {
  }

  crearCamion(){
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Camiones' 
    const id = this.database.getId()
    this.data.id = id

    this.database.createDoc(this.data, path, id).then(() =>
    {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Camión creado exitosamente');
    })
    
    this.data.patente = ""
    this.data.marca = ""
    this.data.modelo = ""
    this.data.anno = ""

  }
}
