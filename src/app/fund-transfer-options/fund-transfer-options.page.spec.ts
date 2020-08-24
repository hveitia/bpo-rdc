import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundTransferOptionsPage } from './fund-transfer-options.page';

describe('FundTransferOptionsPage', () => {
  let component: FundTransferOptionsPage;
  let fixture: ComponentFixture<FundTransferOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundTransferOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundTransferOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
