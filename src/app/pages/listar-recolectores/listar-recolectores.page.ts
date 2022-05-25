import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Camiones, Recolectores } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-listar-recolectores',
  templateUrl: './listar-recolectores.page.html',
  styleUrls: ['./listar-recolectores.page.scss'],
})
export class ListarRecolectoresPage implements OnInit {
  recolector: Recolectores;
  data: Recolectores[] = [];
  camiones: Camiones[] = [];

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
      { type: 'minlength', message: 'Teléfono debe tener 8 numeros' },
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
        Validators.pattern(/([0-9]{2}.[0-9].{3}.[0-9].-[0-9(k)(K)])/),
      ],
    ],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(8)]],
    camionDesignado: ['', [Validators.required]],
  });

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getRecolectores();
    this.getCamiones();

    const card = document.querySelector('ion-card');
    card.style.display = 'none';
  }

  getRecolectores() {
    this.database
      .getCollection<Recolectores>('Recolectores')
      .subscribe((res) => {
        if (res) {
          this.data = res;
        }
      });
  }

  getCamiones() {
    this.database.getCollection<Camiones>('Camiones').subscribe((res) => {
      if (res) {
        this.camiones = res;
      }
    });
  }

  editarRecolector(rec: Recolectores, element: any) {
    this.recolector = {
      run: '',
      nombre: '',
      direccion: '',
      prefijo: '+569',
      telefono: '',
      camionDesignado: '',
      id: '',
    };
    this.recolector = rec;

    setTimeout(function () {
      document.getElementById(element).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 100);
  }

  async guardar(test) {
    await this.userInteraction.presentLoading('Guardando...');
    const path = 'Recolectores';

    await this.database.createDoc(this.recolector, path, this.recolector.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Recolector modificado exitosamente');

    setTimeout(function () {
      document.getElementById(test).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 0);
  }

  async eliminarRecolector(rec: Recolectores) {
    const res = await this.userInteraction.presentAlert(
      'Alerta',
      '¿Seguro que deseas eliminar este recolector?'
    );
    if (res) {
      const path = 'Recolectores';
      await this.database.deleteDoc(path, rec.id);
      this.userInteraction.presentToast('Recolector eliminado exitosamente');
    }
  }
}
