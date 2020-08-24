import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalValidationPage } from './external-validation.page';

const routes: Routes = [
    {
        path: '',
        component: ExternalValidationPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExternalValidationPageRoutingModule {}
