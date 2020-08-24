import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadDepositePage } from './upload-deposite.page';

const routes: Routes = [
  {
    path: '',
    component: UploadDepositePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadDepositePageRoutingModule {}
