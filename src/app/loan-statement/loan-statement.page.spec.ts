import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanStatementPage } from './loan-statement.page';

describe('LoanStatementPage', () => {
  let component: LoanStatementPage;
  let fixture: ComponentFixture<LoanStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanStatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
