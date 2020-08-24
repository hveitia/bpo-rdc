import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanInfoPage } from './loan-info.page';

const routes: Routes = [
  {
    path: '',
    component: LoanInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanInfoPageRoutingModule {}
