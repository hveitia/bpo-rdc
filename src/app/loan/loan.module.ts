import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { LoanPageRoutingModule } from './loan-routing.module';

import { LoanPage } from './loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    LoanPageRoutingModule
  ],
  declarations: [LoanPage] 
})
export class LoanPageModule {}
