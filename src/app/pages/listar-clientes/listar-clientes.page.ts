import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/models';
import { FirestoreService } from 'src/app/services/firestore.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.page.html',
  styleUrls: ['./listar-clientes.page.scss'],
})
export class ListarClientesPage implements OnInit {
  cliente: Cliente;
  data: Cliente[] = [];

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
        Validators.pattern(/([0-9]{2}.[0-9].{3}.[0-9].-[0-9(k)(K)])/),
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

  ngOnInit() {
    this.getClientes();
    const card = document.querySelector('ion-card');
    card.style.display = 'none';
  }

  getClientes() {
    this.database.getCollection<Cliente>('Cliente').subscribe((res) => {
      if (res) {
        this.data = res;
      }
    });
  }

  editarCliente(cli: Cliente, element: any) {
    this.cliente = {
      run: '',
      nombre: '',
      direccion: '',
      prefijo: '+569',
      telefono: '',
      tipoplan: '',
      comuna: '',
      id: '',
    };
    this.cliente = cli;

    setTimeout(function () {
      document.getElementById(element).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 100);

    const card = document.querySelector('ion-card');
    card.style.display = 'block';
  }

  async guardar(test) {
    await this.userInteraction.presentLoading('Guardando...');
    const path = 'Cliente';

    await this.database.createDoc(this.cliente, path, this.cliente.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Cliente modificado exitosamente');

    const card = document.querySelector('ion-card');
    card.style.display = 'none';

    setTimeout(function () {
      document.getElementById(test).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 0);
  }

  async eliminarCliente(cli: Cliente) {
    const res = await this.userInteraction.presentAlert(
      'Alerta',
      '¿Seguro que deseas eliminar este cliente?'
    );
    if (res) {
      const path = 'Cliente';
      await this.database.deleteDoc(path, cli.id);
      this.userInteraction.presentToast('Cliente eliminado exitosamente');
    }
  }
}
