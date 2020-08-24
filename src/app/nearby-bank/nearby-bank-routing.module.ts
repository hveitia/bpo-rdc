import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyBankPage } from './nearby-bank.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyBankPageRoutingModule {}
