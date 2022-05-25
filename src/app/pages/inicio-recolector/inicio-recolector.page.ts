import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';

@Component({
  selector: 'app-inicio-recolector',
  templateUrl: './inicio-recolector.page.html',
  styleUrls: ['./inicio-recolector.page.scss'],
})
export class InicioRecolectorPage implements OnInit {

  constructor(private router: Router,
              private auth: FirestoreauthService,
              private userinterface: UserInteractionService) { }

  ngOnInit() {
  }

  gotoRevisarRutas() {
    this.router.navigate(['/rutas']);
  }

  gotoRevisarNotificaciones() {
    this.router.navigate(['/notificaciones-enviadas']);
  }

  logout(){
    this.userinterface.presentLoading("Cerrando sesión")
    setTimeout(function () {
      location.reload();
    }, 0);
    this.auth.logout();
    this.router.navigate(['/login'])
    this.userinterface.stop();
  }

}
