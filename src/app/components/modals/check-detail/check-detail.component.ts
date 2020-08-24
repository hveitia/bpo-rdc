import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import Cheque from '../../../../models/Cheque';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.scss'],
})
export class CheckDetailComponent implements OnInit {
  @Input() cheque: Cheque;
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
