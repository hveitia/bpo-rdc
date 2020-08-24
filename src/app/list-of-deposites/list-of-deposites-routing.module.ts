import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfDepositesPage } from './list-of-deposites.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfDepositesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfDepositesPageRoutingModule {}
