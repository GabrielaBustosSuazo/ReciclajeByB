import { Component, OnInit } from '@angular/core';
import { Camiones, Recolectores } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-agregar-recolectores',
  templateUrl: './agregar-recolectores.page.html',
  styleUrls: ['./agregar-recolectores.page.scss'],
})
export class AgregarRecolectoresPage implements OnInit {
  camiones: Camiones [] = [];
  data: Recolectores = {
    run: '',
    nombre: '',
    direccion: '',
    telefono: '',
    camionDesignado: '',
    nombreUsuario: '',
    password: '',
    rol: 'recolector',
    id: ''
  }
  constructor(private database : FirestoreService, 
              private userInteraction : UserInteractionService) { }

  ngOnInit() {
    this.getCamiones();
  }

  getCamiones(){
    this.database.getCollection<Camiones>('Camiones').subscribe ( res => {
      if (res){
        this.camiones = res;
      }   
    });
  }


  crearRecolector(){
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Recolectores' 
    const id = this.database.getId()
    this.data.id = id

    this.database.createDoc(this.data, path, id).then(() =>
    {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Recolector creado exitosamente');
    })
    
    this.data.run = ""
    this.data.nombre = ""
    this.data.direccion = ""
    this.data.telefono = ""
    this.data.nombreUsuario = ""
    this.data.password = ""

  }

}
