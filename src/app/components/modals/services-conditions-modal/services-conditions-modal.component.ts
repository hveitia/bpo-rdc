import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-services-conditions-modal',
  templateUrl: './services-conditions-modal.component.html',
  styleUrls: ['./services-conditions-modal.component.scss'],
})
export class ServicesConditionsModalComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
