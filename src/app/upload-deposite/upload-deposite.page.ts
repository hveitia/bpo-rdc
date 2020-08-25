import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {DepositeHelpModalComponent} from '../components/modals/deposite-help-modal/deposite-help-modal.component';
import {ServicesConditionsModalComponent} from '../components/modals/services-conditions-modal/services-conditions-modal.component';
import {CameraPreview} from 'cordova-plugin-camera-preview';

@Component({
  selector: 'app-upload-deposite',
  templateUrl: './upload-deposite.page.html',
  styleUrls: ['./upload-deposite.page.scss'],
})
export class UploadDepositePage implements OnInit {
  constructor(private route: Router, public modalController: ModalController, public alertController: AlertController) { }
  amount = 0;
  precision = 2;
  servicesContitionsAccepted: boolean;
  ngOnInit() {
    this.servicesContitionsAccepted = this.getServicesConditionStatus();

    if (!this.servicesContitionsAccepted) {
      this.showServicesConditionsModal();
    }
  }
  getServicesConditionStatus() {
    return  true;
  }
  amountChanged(event: number) {
    this.amount = event;
  }
  transfered_successfully() {
      this.route.navigate(['./transfered-successfully']);
  }
  async showHelpModal() {
    const modal = await this.modalController.create({
      component: DepositeHelpModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async showServicesConditionsModal() {
    const modal = await this.modalController.create({
      component: ServicesConditionsModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmar depósito!',
      message: 'Está seguro que desea depositar el cheque con los datos seleccionados?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {}
        }, {
          text: 'Ok',
          handler: () => {
            this.transfered_successfully();
          }
        }
      ]
    });

    await alert.present();
  }
  startCamera() {
    // const options = {
    //   x: 0,
    //   y: 0,
    //   width: window.screen.width,
    //   height: window.screen.height,
    //   camera: CameraPreview.CAMERA_DIRECTION.BACK,
    //   toBack: false,
    //   tapPhoto: true,
    //   tapFocus: false,
    //   previewDrag: false,
    //   storeToFile: false,
    //   disableExifHeaderStripping: false
    // };
    //
    // CameraPreview.startCamera(options);
  }
}
