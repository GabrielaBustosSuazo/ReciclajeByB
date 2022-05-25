import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-inicio-administrador',
  templateUrl: './inicio-administrador.page.html',
  styleUrls: ['./inicio-administrador.page.scss'],
})
export class InicioAdministradorPage implements OnInit {
  today: any;

  constructor(private router:Router,
              private auth: FirestoreauthService,
              private userinterface: UserInteractionService) { }

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

  logout(){
    this.userinterface.presentToast("Cerrando sesión...")
    setTimeout(function () {
      location.reload();
    }, 0);
    this.auth.logout();
    this.userinterface.stop()
    this.router.navigate(['/login'])
  }
}
