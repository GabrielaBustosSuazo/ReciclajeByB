import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Camiones, Rutas, Usuario } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-agregar-rutas',
  templateUrl: './agregar-rutas.page.html',
  styleUrls: ['./agregar-rutas.page.scss'],
})
export class AgregarRutasPage implements OnInit {
  camiones: Camiones[] = [];
  usuario: Usuario[] = [];
  data: Rutas = {
    camionAsignado: '',
    recolectorAsignado: '',
    clienteAsignado: '',
    direccion: '',
    comuna: '',
    fecha: formatDate(new Date(), 'dd/MM/yyyy', 'en'),
    hora: '',
    id: '',
  };

  get camionAsignado() {
    return this.rutasForm.get('camionAsignado');
  }
  get recolectorAsignado() {
    return this.rutasForm.get('recolectorAsignado');
  }
  get clienteAsignado() {
    return this.rutasForm.get('clienteAsignado');
  }

  get direccion() {
    return this.rutasForm.get('direccion');
  }
  get comuna() {
    return this.rutasForm.get('comuna');
  }

  get hora() {
    return this.rutasForm.get('hora');
  }

  public errorMessages = {
    camionAsignado: [
      { type: 'required', message: 'Debes seleccionar una patente' },
    ],
    recolectorAsignado: [
      { type: 'required', message: 'Debes seleccionar un recolector' },
    ],
    clienteAsignado: [
      { type: 'required', message: 'Debes seleccionar un cliente' },
    ],
    direccion: [
      { type: 'required', message: 'Dirección no puede estar vacía' },
    ],
    comuna: [{ type: 'required', message: 'Comuna no puede estar vacía' }],
    hora: [{ type: 'required', message: 'Hora no puede estar vacía' }],
  };

  rutasForm = this.formBuilder.group({
    camionAsignado: ['', [Validators.required]],
    recolectorAsignado: ['', [Validators.required]],
    clienteAsignado: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    comuna: ['', [Validators.required]],
    hora: ['', [Validators.required]],
  });

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService,
    public datepipe: DatePipe,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getCamiones();
    this.getUsuarios();
  }

  crearRutas() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Rutas';
    const id = this.database.getId();
    this.data.id = id;

    this.database.createDoc(this.data, path, id).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Ruta creada exitosamente');
    });

    (this.data.camionAsignado = ''),
      (this.data.recolectorAsignado = ''),
      (this.data.clienteAsignado = ''),
      (this.data.direccion = ''),
      (this.data.comuna = ''),
      (this.data.hora = '');

    setTimeout(function () {
      const errores = document.querySelectorAll('.error-message');
      const input = document.querySelectorAll('input');
      const ionSelect = document.querySelectorAll('ion-select');

      errores.forEach((element) => {
        (element as HTMLElement).style.display = 'none';
      });
      input.forEach((element) => {
        (element as HTMLElement).classList.toggle('ng-touched');
      });
      ionSelect.forEach((element) => {
        (element as HTMLElement).classList.toggle('ng-touched');
      });
    }, 0);

    setTimeout(function () {
      location.reload();
    }, 2000);
  }

  getCamiones() {
    this.database.getCollection<Camiones>('Camiones').subscribe((res) => {
      if (res) {
        this.camiones = res;
      }
    });
  }

  getUsuarios() {
    this.database.getCollection<Usuario>('Usuarios').subscribe((res) => {
      if (res) {
        this.usuario = res;
      }
    });
  }
 

}
