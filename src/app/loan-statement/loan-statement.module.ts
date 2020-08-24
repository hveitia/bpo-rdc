import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { LoanStatementPageRoutingModule } from './loan-statement-routing.module';

import { LoanStatementPage } from './loan-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, 
	TranslateModule,   
    LoanStatementPageRoutingModule
  ],
  declarations: [LoanStatementPage]
})
export class LoanStatementPageModule {}
