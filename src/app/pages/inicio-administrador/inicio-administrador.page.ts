import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.page.html',
  styleUrls: ['./inicio-administrador.page.scss'],
})
export class InicioAdministradorPage implements OnInit {
  today: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.today = Date.now();
  }

  agregarRutas() {
    this.router.navigate(['/agregar-rutas']);
  }

  agregarClientes() {
    this.router.navigate(['/agregar-clientes']);
  }

  agregarRecolectores() {
    this.router.navigate(['/agregar-recolectores']);
  }

  agregarCamiones() {
    this.router.navigate(['/agregar-camiones']);
  }

  seguimientoPlanillas(){
    this.router.navigate(['/seguimiento-planillas']);
  }
}
