import { Component, OnInit } from '@angular/core';
import { Cliente, Evidencias, Recolectores } from 'src/app/models/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-ingreso-evidencia',
  templateUrl: './ingreso-evidencia.page.html',
  styleUrls: ['./ingreso-evidencia.page.scss'],
})
export class IngresoEvidenciaPage implements OnInit {
  clientes: Cliente [] = [];
  recolectores: Recolectores [] = [];
  private path = 'Evidencias/';
  imageuploaded = '';
  newFile: any;
  evidencia: Evidencias = {
    foto: '',
    comentario: '',
    id: '',
    clienteAsignado: '',
    recolectorAsignado: ''
  }
  

  constructor(private userInteraction: UserInteractionService,
              private database: FirestoreService,
              private firestorage: FirestorageService) { }

  ngOnInit() {
    this.getClientes()
    this.getRecolectores()
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


  async crearEvidencia(){
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Evidencia';
    const id = this.database.getId()
    this.evidencia.id = id
    const nombre = id;
      if (this.newFile !== undefined) {
        const res = await this.firestorage.uploadImage(this.newFile, path, nombre);
        this.evidencia.foto = res;
      }
 

    this.database.createDoc(this.evidencia, this.path, id).then(() =>
    {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Evidencia cargada exitosamente');
    })

    this.evidencia.foto = ''
    this.evidencia.comentario = ''
  }

  newImage(event: any){
    if (event.target.files && event.target.files[0]){
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
        this.evidencia.foto = image.target.result as string;
      });
      reader.readAsDataURL(event.target.files[0]);
    }

  }
}
