import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { ImpsPageRoutingModule } from './imps-routing.module';

import { ImpsPage } from './imps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    ImpsPageRoutingModule
  ],
  declarations: [ImpsPage]
})
export class ImpsPageModule {}
