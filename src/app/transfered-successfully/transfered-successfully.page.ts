import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transfered-successfully',
  templateUrl: './transfered-successfully.page.html',
  styleUrls: ['./transfered-successfully.page.scss'],
})
export class TransferedSuccessfullyPage implements OnInit {

  constructor(private navCtrl: NavController, ) { }

  ngOnInit() {
  }

  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }

  other() {
    this.navCtrl.navigateRoot(['./upload-deposite']);
  }
}
