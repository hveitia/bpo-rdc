import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import {ExternalValidationPageRoutingModule} from './external-validation-routing.module';

import {ExternalValidationPage} from './external-validation.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        ExternalValidationPageRoutingModule
    ],
    declarations: [ExternalValidationPage]
})
export class ExternalValidationPageModule {}
