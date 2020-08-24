import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOfDepositesPage } from './list-of-deposites.page';

describe('ListOfDepositesPage', () => {
  let component: ListOfDepositesPage;
  let fixture: ComponentFixture<ListOfDepositesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDepositesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfDepositesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
