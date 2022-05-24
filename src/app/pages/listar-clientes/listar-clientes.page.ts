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

  
  constructor(
    private database: FirestoreService,
    private userInteraction: UserInteractionService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getClientes();

  }

  getClientes() {
    this.database.getCollection<Cliente>('Cliente').subscribe((res) => {
      if (res) {
        this.data = res;
      }
    });
  }


  editarCliente(cli: Cliente) { 
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
  }

  async guardar() {
    await this.userInteraction.presentLoading('Guardando...');
    const path = 'Cliente';

    await this.database.createDoc(this.cliente, path, this.cliente.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Cliente modificado exitosamente');
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