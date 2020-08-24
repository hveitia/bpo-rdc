import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundTransferOptionsPage } from './fund-transfer-options.page';

const routes: Routes = [
  {
    path: '',
    component: FundTransferOptionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundTransferOptionsPageRoutingModule {}
