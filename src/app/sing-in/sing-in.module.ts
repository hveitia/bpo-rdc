import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SingInPageRoutingModule } from './sing-in-routing.module';

import { SingInPage } from './sing-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    SingInPageRoutingModule
  ],
  declarations: [SingInPage]
})
export class SingInPageModule {}
