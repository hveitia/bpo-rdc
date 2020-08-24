import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { StatementPageRoutingModule } from './statement-routing.module';

import { StatementPage } from './statement.page';
import {CheckDetailComponent} from '../components/modals/check-detail/check-detail.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,
    StatementPageRoutingModule,
  ],
  declarations: [StatementPage, CheckDetailComponent],
  entryComponents:[CheckDetailComponent]
})
export class StatementPageModule {}
