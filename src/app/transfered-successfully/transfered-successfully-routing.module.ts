import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferedSuccessfullyPage } from './transfered-successfully.page';

const routes: Routes = [
  {
    path: '',
    component: TransferedSuccessfullyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferedSuccessfullyPageRoutingModule {}
