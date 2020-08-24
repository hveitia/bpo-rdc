import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
    selector: 'app-external-validation',
    templateUrl: './external-validation.page.html',
    styleUrls: ['./external-validation.page.scss'],
})
export class ExternalValidationPage implements OnInit {
    constructor(private navCtrl: NavController, private route: Router) { }
    ngOnInit() {
    }

    password_validation() {
        this.route.navigate(['./password-validation']);
    }
}
