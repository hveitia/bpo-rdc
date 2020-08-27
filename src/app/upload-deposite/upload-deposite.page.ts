import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {DepositeHelpModalComponent} from '../components/modals/deposite-help-modal/deposite-help-modal.component';
import {ServicesConditionsModalComponent} from '../components/modals/services-conditions-modal/services-conditions-modal.component';
import {CameraPreview} from 'cordova-plugin-camera-preview';
import Cheque from '../../models/Cheque';
import EstadoCheque from '../../models/Enums/EstadoCheque';
// @ts-ignore
import moment from 'moment';
import {DepositoCheque} from '../../services/deposito_cheque.service';
import {ComunicacionService} from 'comunicacion-http-plan-market';

@Component({
  selector: 'app-upload-deposite',
  templateUrl: './upload-deposite.page.html',
  styleUrls: ['./upload-deposite.page.scss'],
})
export class UploadDepositePage implements OnInit {
  constructor(private route: Router, public modalController: ModalController,
              public depositoChequeService: DepositoCheque,
              public alertController: AlertController) { }
  amount = 0;
  precision = 2;
  servicesContitionsAccepted: boolean;
  public numero: string;
  public valor: number;
  public estado: string;
  public fecha: string;
  public banco: string;
  public hora: string;
  public cuenta: string;
  public cuentaAcreditar: string;
  public comision: string;
  public detalle: string;
  ngOnInit() {
    this.servicesContitionsAccepted = this.getServicesConditionStatus();
  }
  getServicesConditionStatus() {
    return  true;
  }
  amountChanged(event: number) {
    this.amount = event;
    this.valor = this.amount / 100;
    this.hora = moment().format('HH:mm:ss');
  }
  transfered_successfully() {
    this.estado = EstadoCheque.PENDIENTE;
    this.fecha = moment().format('DD/MM/YYYY');
    this.cuentaAcreditar = '12312321';
    this.comision = '0.00';
    this.detalle = '';

    const cheque = new Cheque(this.numero, this.valor, this.estado,
        this.fecha, this.banco, this.hora, this.cuenta, this.cuentaAcreditar,
        this.comision, this.detalle);

    this.depositoChequeService.setCheque(cheque);
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
            const api = new ComunicacionService();
            const data = api.depositarCheque(true);
            if (data.codigo === 0) {
              this.transfered_successfully();
            }
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
