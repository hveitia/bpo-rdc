import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import {ServicesConditionsModalComponent} from '../components/modals/services-conditions-modal/services-conditions-modal.component';
import {ComunicacionService} from 'comunicacion-http-plan-market';

@Component({
    selector: 'app-password-validation',
    templateUrl: './password-validation.page.html',
    styleUrls: ['./password-validation.page.scss'],
})

export class PasswordValidationPage implements OnInit {

    terminosAceptados: boolean;

    constructor(private navCtrl: NavController,
                private route: Router,
                public alertController: AlertController,
                public modalController: ModalController) {
        this.terminosAceptados = false;
    }

    ngOnInit() {
        this.presentAlert();
    }
    tabs() {
        this.navCtrl.navigateRoot(['./tabs']);
    }
    async login() {
        if (!this.terminosAceptados) {
                const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Términos y Condiciones',
                    subHeader: '',
                    message: 'Debe aceptar los Términos y Condiciones.',
                    buttons: ['OK']
                });
                await alert.present();
        } else {
            const api = new ComunicacionService();
            const data = api.registrarUsuario(true);
            if (data.codigo === 0) {
                const alert = await this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Creación de usuario correctamente',
                    subHeader: '',
                    message: 'Se ha creado su usuario de manera satisfactoria.',
                    buttons: ['OK']
                });
                await alert.present();
                this.navCtrl.navigateRoot(['./sing-in']);
            }
        }
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Validación correcta',
            subHeader: '',
            message: 'Se han validado sus datos de manera satisfactoria.',
            buttons: ['OK']
        });

        await alert.present();
    }

    async showTerminosCondiciones() {
        const modal = await this.modalController.create({
            component: ServicesConditionsModalComponent,
            cssClass: 'my-custom-class'
        });
        return await modal.present();
    }
}
