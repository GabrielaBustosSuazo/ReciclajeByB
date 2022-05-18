import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Camiones, Recolectores } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';
@Component({
  selector: 'app-agregar-recolectores',
  templateUrl: './agregar-recolectores.page.html',
  styleUrls: ['./agregar-recolectores.page.scss'],
})
export class AgregarRecolectoresPage implements OnInit {
  camiones: Camiones[] = [];
  data: Recolectores = {
    run: '',
    nombre: '',
    direccion: '',
    telefono: '',
    camionDesignado: '',
    rol: 'recolector',
    id: '',
  };

  get run() {
    return this.recolectoresForm.get('run');
  }
  get nombre() {
    return this.recolectoresForm.get('nombre');
  }
  get direccion() {
    return this.recolectoresForm.get('direccion');
  }
  get telefono() {
    return this.recolectoresForm.get('telefono');
  }
  get camionDesignado() {
    return this.recolectoresForm.get('camionDesignado');
  }

  public errorMessages = {
    run: [
      { type: 'required', message: 'Run no puede estar vacío' },
      { type: 'pattern', message: 'Ingrese formato correcto: XX.XXX.XXX-X' },
    ],
    nombre: [{ type: 'required', message: 'Nombre no puede estar vacío' }],
    direccion: [
      { type: 'required', message: 'Dirección no puede estar vacío' },
    ],
    telefono: [
      { type: 'required', message: 'Teléfono no puede estar vacío' },
      { type: 'pattern', message: 'Ingrese formato correcto: 569XXXXXXXX' },
    ],
    camionDesignado: [
      { type: 'required', message: 'Debes seleccionar un camion' },
    ],
  };

  recolectoresForm = this.formBuilder.group({
    run: [
      '',
      [
        Validators.required,
        Validators.pattern(/([0-9]{2}.[0-9].{3}.[0-9].-[0-9])/),
      ],
    ],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/),
      ],
    ],
    camionDesignado: ['', [Validators.required]],
  });

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCamiones();
  }

  getCamiones() {
    this.database.getCollection<Camiones>('Camiones').subscribe((res) => {
      if (res) {
        this.camiones = res;
      }
    });
  }

  crearRecolector() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Recolectores';
    const id = this.database.getId();
    this.data.id = id;

    this.database.createDoc(this.data, path, id).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Recolector creado exitosamente');
    });

    this.data.run = '';
    this.data.nombre = '';
    this.data.direccion = '';
    this.data.telefono = '';
  }
}
