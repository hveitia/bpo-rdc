import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordValidationPage } from './password-validation.page';

const routes: Routes = [
    {
        path: '',
        component: PasswordValidationPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PasswordValidationPageRoutingModule {}
