import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticaprivacidadePage } from './politicaprivacidade.page';

describe('PoliticaprivacidadePage', () => {
  let component: PoliticaprivacidadePage;
  let fixture: ComponentFixture<PoliticaprivacidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaprivacidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticaprivacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
