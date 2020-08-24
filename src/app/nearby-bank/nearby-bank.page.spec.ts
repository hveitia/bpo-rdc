import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyBankPage } from './nearby-bank.page';

describe('NearbyBankPage', () => {
  let component: NearbyBankPage;
  let fixture: ComponentFixture<NearbyBankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyBankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyBankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
