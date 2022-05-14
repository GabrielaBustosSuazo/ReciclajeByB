import { Component } from '@angular/core';
import { FirestoreauthService } from './services/firestoreauth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private firestoreauthservice: FirestoreauthService) {}
}
