import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThumbImpressionPage } from './thumb-impression.page';

describe('ThumbImpressionPage', () => {
  let component: ThumbImpressionPage;
  let fixture: ComponentFixture<ThumbImpressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbImpressionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThumbImpressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
