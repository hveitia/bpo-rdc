import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { LoanInfoPageRoutingModule } from './loan-info-routing.module';

import { LoanInfoPage } from './loan-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    LoanInfoPageRoutingModule
  ],
  declarations: [LoanInfoPage]
})
export class LoanInfoPageModule {}
