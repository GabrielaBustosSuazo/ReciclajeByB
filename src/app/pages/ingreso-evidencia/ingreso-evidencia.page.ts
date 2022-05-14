import { Component, OnInit } from '@angular/core';
import { Evidencias } from 'src/app/models/models';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-ingreso-evidencia',
  templateUrl: './ingreso-evidencia.page.html',
  styleUrls: ['./ingreso-evidencia.page.scss'],
})
export class IngresoEvidenciaPage implements OnInit {
  private path = 'Evidencias/';
  imageuploaded = '';
  newFile: any;
  evidencia: Evidencias = {
    foto: '',
    comentario: '',
    id: ''
  }
  

  constructor(private userInteraction: UserInteractionService,
              private database: FirestoreService,
              private firestorage: FirestorageService) { }

  ngOnInit() {
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
