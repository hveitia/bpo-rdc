import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-deposite-help-modal',
  templateUrl: './deposite-help-modal.component.html',
  styleUrls: ['./deposite-help-modal.component.scss'],
})
export class DepositeHelpModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
