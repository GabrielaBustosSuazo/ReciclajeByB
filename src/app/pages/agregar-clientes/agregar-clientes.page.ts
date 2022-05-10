import { Component, OnInit } from '@angular/core';
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
    telefono: '',
    usuario: '',
    contrasena: '',
    tipoplan: '',
    rol: 'cliente',
    id: '',
  };

  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService
  ) {}

  ngOnInit() {}

  crearCliente() {
    this.userInteraction.presentLoading('Guardando...');
    const path = 'Cliente';
    const id = this.database.getId();
    this.data.id = id;

    this.database.createDoc(this.data, path, id).then(() => {
      this.userInteraction.closeLoading();
      this.userInteraction.presentToast('Cliente creado exitosamente');
    });
    this.data.run = '';
    this.data.nombre = '';
    this.data.direccion = '';
    this.data.telefono = '';
    this.data.usuario = '';
    this.data.contrasena = '';
    this.data.tipoplan = '';
  }
}
