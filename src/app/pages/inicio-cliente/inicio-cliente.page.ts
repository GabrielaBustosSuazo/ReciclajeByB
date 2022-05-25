import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';
import { UserInteractionService } from 'src/app/services/user-interaction.service';


@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  constructor(private router:Router, 
              public auth: FirestoreauthService,
              public userinterface: UserInteractionService) { 

              }

ngOnInit() {
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones']);
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
