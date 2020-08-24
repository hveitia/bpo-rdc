import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { NearbyBankPageRoutingModule } from './nearby-bank-routing.module';

import { NearbyBankPage } from './nearby-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,     
    NearbyBankPageRoutingModule
  ],
  declarations: [NearbyBankPage]
})
export class NearbyBankPageModule {}
