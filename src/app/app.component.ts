import { Component } from '@angular/core';
import { FirestoreauthService } from './services/firestoreauth.service';
import { NotificacionesService } from './services/notificaciones.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private firestoreauthservice: FirestoreauthService,
              private notificationsService: NotificacionesService
              ) {
                
              }
}
