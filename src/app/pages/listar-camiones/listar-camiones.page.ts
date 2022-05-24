import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  get patente() {
    return this.camionesForm.get('patente');
  }
  get marca() {
    return this.camionesForm.get('marca');
  }
  get modelo() {
    return this.camionesForm.get('modelo');
  }
  get anno() {
    return this.camionesForm.get('anno');
  }
  
  public errorMessages = {
    patente: [
      { type: 'required', message: 'Patente no puede estar vacia' },
      { type: 'minlength', message: 'Patente debe tener min. 6 caracteres' },
      { type: 'maxlength', message: 'Patente debe tener max. 6 caracteres' },
      { type: 'pattern', message: 'Ingrese formato correcto: XXXX90' },
    ],
    marca: [
      { type: 'required', message: 'Marca no puede estar vacia' },
      { type: 'pattern', message: 'Marca no puede tener numeros' },
    ],
    modelo: [{ type: 'required', message: 'Modelo no puede estar vacia' }],
    anno: [
      { type: 'required', message: 'Año no puede estar vacia' },
      { type: 'pattern', message: 'Año solo permite números' },
      { type: 'minlength', message: 'Año debe tener min. 4 numeros' },
      { type: 'maxlength', message: 'Año debe tener max. 4 numeros' },
    ],
  };

  camionesForm = this.formBuilder.group({
    patente: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern(/([A-Z a-z]{4})([0-9]{2})/),
      ],
    ],
    marca: ['', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]],
    modelo: ['', [Validators.required]],
    anno: [
      '',
      [
        Validators.required,
        Validators.pattern(/([0-9]{4})/),
        Validators.minLength(4),
        Validators.maxLength(4),
      ],
    ],
  });


  constructor(private database: FirestoreService,
              private userInteraction: UserInteractionService,
              private formBuilder: FormBuilder) { }

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
