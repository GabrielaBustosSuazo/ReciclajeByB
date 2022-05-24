import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.page.html',
  styleUrls: ['./agregar-clientes.page.scss'],
})
export class AgregarClientesPage implements OnInit {
  data: Cliente = {
    run: '',
    nombre: '',
    direccion: '',
    prefijo: '+569',
    telefono: '',
    tipoplan: '',
    comuna: '',
    id: '',
  };


  get run() {
    return this.clientesForm.get('run');
  }

  get nombre() {
    return this.clientesForm.get('nombre');
  }
  get direccion() {
    return this.clientesForm.get('direccion');
  }
  get telefono() {
    return this.clientesForm.get('telefono');
  }

  get comuna() {
    return this.clientesForm.get('comuna');
  }

  get plan() {
    return this.clientesForm.get('plan');
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
    comuna: [{ type: 'required', message: 'Comuna no puede estar vacía' }],
    plan: [{ type: 'required', message: 'Elija un tipo de plan' }],
  };

  clientesForm = this.formBuilder.group({
    run: [
      '',
      [
        Validators.required,
        Validators.pattern(/([0-9]{2}.[0-9].{3}.[0-9].-[0-9])/),
      ],
    ],
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    telefono: ['', [Validators.required, Validators.minLength(8)]],
    comuna: ['', [Validators.required]],
    plan: ['', [Validators.required]],
  });

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  crearCliente() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Cliente';
    const id = this.database.getId();
    this.data.id = id;
    this.data.telefono = this.data.prefijo + this.data.telefono

    this.database.createDoc(this.data, path, id).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Cliente creado exitosamente');
    });
    this.data.run = '';
    this.data.nombre = '';
    this.data.direccion = '';
    this.data.telefono = '';
    this.data.comuna = '';
    this.data.tipoplan = '';
  }
}
