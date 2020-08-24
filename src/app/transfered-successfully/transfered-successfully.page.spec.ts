import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferedSuccessfullyPage } from './transfered-successfully.page';

describe('TransferedSuccessfullyPage', () => {
  let component: TransferedSuccessfullyPage;
  let fixture: ComponentFixture<TransferedSuccessfullyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferedSuccessfullyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferedSuccessfullyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
