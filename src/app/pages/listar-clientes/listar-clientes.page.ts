import { Component, OnInit } from '@angular/core';
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
    private userInteraction: UserInteractionService
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

  editarCliente(cli: Cliente, element: any) {
    this.cliente = {
      run: '',
      nombre: '',
      direccion: '',
      telefono: '',
      tipoplan: '',
      rol: 'cliente',
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
    const path = 'Camiones';

    await this.database.createDoc(this.cliente, path, this.cliente.id);
    this.userInteraction.closeLoading();
    this.userInteraction.presentToast('Cliente modificado exitosamente');

    setTimeout(function () {
      document.getElementById(test).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 500);

    setTimeout(function () {
      const card = document.querySelector('ion-card');
      card.style.display = 'none';
    }, 500);
  }

  async eliminarCliente(cli: Cliente) {
    const res = await this.userInteraction.presentAlert(
      'Alerta',
      '¿Seguro que deseas eliminar este camión?'
    );
    if (res) {
      const path = 'Cliente';
      await this.database.deleteDoc(path, cli.id);
      this.userInteraction.presentToast('Cliente eliminado exitosamente');
    }
  }
}
