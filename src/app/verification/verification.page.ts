import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ComunicacionService} from 'comunicacion-http-plan-market';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  tabs() {
    const api = new ComunicacionService();
    const data = api.verificarOtp(true);
    if (data.codigo === 0) {
      this.navCtrl.navigateRoot(['./tabs']);
    }
  }
}
