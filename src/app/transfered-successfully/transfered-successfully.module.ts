import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	 
import { IonicModule } from '@ionic/angular';

import { TransferedSuccessfullyPageRoutingModule } from './transfered-successfully-routing.module';

import { TransferedSuccessfullyPage } from './transfered-successfully.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    TransferedSuccessfullyPageRoutingModule
  ],
  declarations: [TransferedSuccessfullyPage]
})
export class TransferedSuccessfullyPageModule {}
 