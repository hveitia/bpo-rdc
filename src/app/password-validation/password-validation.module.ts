import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PasswordValidationPageRoutingModule } from './password-validation-routing.module';

import { PasswordValidationPage } from './password-validation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        PasswordValidationPageRoutingModule
    ],
    declarations: [PasswordValidationPage]
})
export class PasswordValidationPageModule {}
