import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
    selector: 'app-password-validation',
    templateUrl: './password-validation.page.html',
    styleUrls: ['./password-validation.page.scss'],
})

export class PasswordValidationPage implements OnInit {

    constructor(private navCtrl: NavController, private route: Router) { }

    ngOnInit() {
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
}
