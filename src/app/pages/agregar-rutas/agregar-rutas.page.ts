import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Camiones, Cliente, Recolectores, Rutas } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-agregar-rutas',
  templateUrl: './agregar-rutas.page.html',
  styleUrls: ['./agregar-rutas.page.scss'],
})
export class AgregarRutasPage implements OnInit {
  clientes: Cliente [] = [];
  camiones: Camiones [] = [];
  recolectores: Recolectores [] = [];
  data: Rutas = { 
  
  camionAsignado: '',
  recolectorAsignado: '',
  clienteAsignado: '',
  direccion: '',
  fecha: formatDate(new Date(), 'dd/MM/yyyy', 'en'),
  hora: '',
  id: ''
  }




  constructor(private database: FirestoreService,
              private userInteraction : UserInteractionService,
              public datepipe: DatePipe) { }

  ngOnInit() {
    this.getCamiones();
    this.getClientes();
    this.getRecolectores();
  }
  

  crearRutas(){
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Rutas' 
    const id = this.database.getId()
    this.data.id = id


    this.database.createDoc(this.data, path, id).then(() =>
    {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Ruta creada exitosamente');
    })

    this.data.camionAsignado= '',
    this.data.recolectorAsignado= '',
    this.data.clienteAsignado= '',
    this.data.direccion= '',
    this.data.hora= ''
  }
  
  getCamiones(){
      this.database.getCollection<Camiones>('Camiones').subscribe ( res => {
        if (res){
          this.camiones = res;
        }   
      });
  }

  getClientes(){
      this.database.getCollection<Cliente>('Cliente').subscribe ( res => {
        if (res){
          this.clientes = res;
        }   
      });
    }

  getRecolectores(){
      this.database.getCollection<Recolectores>('Recolectores').subscribe ( res => {
        if (res){
          this.recolectores = res;
        }   
      });
    }

}

