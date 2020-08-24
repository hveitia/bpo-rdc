import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanInfoPage } from './loan-info.page';

describe('LoanInfoPage', () => {
  let component: LoanInfoPage;
  let fixture: ComponentFixture<LoanInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
