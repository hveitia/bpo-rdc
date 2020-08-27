import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import Cheque from '../../models/Cheque';
import {DepositoCheque} from '../../services/deposito_cheque.service';

@Component({
  selector: 'app-transfered-successfully',
  templateUrl: './transfered-successfully.page.html',
  styleUrls: ['./transfered-successfully.page.scss'],
})
export class TransferedSuccessfullyPage implements OnInit {

  private  cheque: Cheque;
  constructor(private navCtrl: NavController, public depositoChequeService: DepositoCheque, ) { }

  ngOnInit() {
    this.cheque = this.depositoChequeService.getCheque();
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }

  other() {
    this.navCtrl.navigateRoot(['./upload-deposite']);
  }
}
