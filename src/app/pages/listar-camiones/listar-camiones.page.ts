import { Component, OnInit } from '@angular/core';
import { Camiones } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-modificar-camiones',
  templateUrl: './listar-camiones.page.html',
  styleUrls: ['./listar-camiones.page.scss'],
})
export class ListarCamionesPage implements OnInit {

  camion: Camiones;
  data: Camiones [] = [];

  constructor(private database: FirestoreService,
              private userInteraction: UserInteractionService) { }

  ngOnInit() {
    this.getCamiones()
  }

  getCamiones(){
    this.database.getCollection<Camiones>('Camiones').subscribe ( res => {
      if (res){
        this.data = res;
      }   
    });
  }

  editarCamion(cam: Camiones){
    this.camion ={
      patente: '',
      marca: '',
      modelo: '',
      anno: '',
      id: ''
    } 
    this.camion = cam;
    
  }

  async guardar(){
    await this.userInteraction.presentLoading('Guardando...');
    const path = 'Camiones' 

    await this.database.createDoc(this.camion, path, this.camion.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Camión modificado exitosamente');
  }

  async eliminarCamion(cam: Camiones){
    const res = await this.userInteraction.presentAlert("Alerta", "¿Seguro que deseas eliminar este camión?")
    if (res) {
      const path = 'Camiones' 
      await this.database.deleteDoc(path, cam.id);
      this.userInteraction.presentToast('Camión eliminado exitosamente');
    }

  }
}
