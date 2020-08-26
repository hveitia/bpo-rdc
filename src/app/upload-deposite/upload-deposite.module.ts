import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { UploadDepositePageRoutingModule } from './upload-deposite-routing.module';

import { UploadDepositePage } from './upload-deposite.page';
import {InputCurrencyComponent} from '../components/common/input-currency/input-currency.component';
import {DepositeHelpModalComponent} from '../components/modals/deposite-help-modal/deposite-help-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    UploadDepositePageRoutingModule
  ],
  declarations: [UploadDepositePage, InputCurrencyComponent, DepositeHelpModalComponent],
  entryComponents: [DepositeHelpModalComponent]
})
export class UploadDepositePageModule {}
