import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanStatementPage } from './loan-statement.page';

const routes: Routes = [
  {
    path: '',
    component: LoanStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanStatementPageRoutingModule {}
