import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpsPage } from './imps.page';

const routes: Routes = [
  {
    path: '',
    component: ImpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpsPageRoutingModule {}
