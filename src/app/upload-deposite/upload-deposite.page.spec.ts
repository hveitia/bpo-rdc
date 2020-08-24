import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadDepositePage } from './upload-deposite.page';

describe('UploadDepositePage', () => {
  let component: UploadDepositePage;
  let fixture: ComponentFixture<UploadDepositePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDepositePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadDepositePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
