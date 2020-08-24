import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImpsPage } from './imps.page';

describe('ImpsPage', () => {
  let component: ImpsPage;
  let fixture: ComponentFixture<ImpsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
