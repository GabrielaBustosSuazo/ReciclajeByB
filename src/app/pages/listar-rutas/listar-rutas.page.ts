import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Rutas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-listar-rutas',
  templateUrl: './listar-rutas.page.html',
  styleUrls: ['./listar-rutas.page.scss'],
})
export class ListarRutasPage implements OnInit {
  data: Rutas [] = [];
  rutas: Rutas;

  constructor(private database: FirestoreService,
              private userInteraction: UserInteractionService,
              ) { }

  ngOnInit() {
    this.getRutas()
    
  }

  getRutas(){
    this.database.getCollection<Rutas>('Rutas').subscribe ( res => {
      if (res){
        this.data = res;
      }   
    });
  }

  /* editarRutas(rut: Rutas){
    this.rutas ={
      camionAsignado: '',
      recolectorAsignado: '',
      clienteAsignado: '',
      direccion: '',
      fecha: formatDate(new Date(), 'dd/MM/yyyy', 'en'),
      hora: '',
      id: ''
      }
    
    this.rutas = rut;
    
  }

  async guardar(){
    await this.userInteraction.presentLoading('Guardando...');
    const path = 'Rutas' 

    await this.database.createDoc(this.rutas, path, this.rutas.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Ruta modificada exitosamente');
  }
  */
  

  async eliminarRuta(rut: Rutas){
    const res = await this.userInteraction.presentAlert("Alerta", "¿Seguro que deseas eliminar esta ruta?")
    if (res) {
      const path = 'Rutas' 
      await this.database.deleteDoc(path, rut.id);
      this.userInteraction.presentToast('Ruta eliminada exitosamente');
    }

  }
}


