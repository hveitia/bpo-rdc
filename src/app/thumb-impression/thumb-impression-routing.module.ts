import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThumbImpressionPage } from './thumb-impression.page';

const routes: Routes = [
  {
    path: '',
    component: ThumbImpressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThumbImpressionPageRoutingModule {}
