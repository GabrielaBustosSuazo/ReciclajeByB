import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreauthService } from 'src/app/services/firestoreauth.service';


@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  constructor(private router:Router, 
              public auth: FirestoreauthService) { 

              }

ngOnInit() {
  }

  gotoNotifications() {
    this.router.navigate(['/notificaciones']);
  }

}
