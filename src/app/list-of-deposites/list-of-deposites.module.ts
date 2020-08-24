import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ListOfDepositesPageRoutingModule } from './list-of-deposites-routing.module';

import { ListOfDepositesPage } from './list-of-deposites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    ListOfDepositesPageRoutingModule
  ],
  declarations: [ListOfDepositesPage]
})
export class ListOfDepositesPageModule {}
 