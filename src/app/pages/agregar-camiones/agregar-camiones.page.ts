import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    id: '',
  };

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

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  crearCamion() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Camiones';
    const id = this.database.getId();
    this.data.id = id;

    this.database.createDoc(this.data, path, id).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Camión creado exitosamente');
    });

    this.data.patente = '';
    this.data.marca = '';
    this.data.modelo = '';
    this.data.anno = '';
  }
}
