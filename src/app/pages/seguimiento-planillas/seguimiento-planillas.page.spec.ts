import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeguimientoPlanillasPage } from './seguimiento-planillas.page';

describe('SeguimientoPlanillasPage', () => {
  let component: SeguimientoPlanillasPage;
  let fixture: ComponentFixture<SeguimientoPlanillasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoPlanillasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeguimientoPlanillasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
