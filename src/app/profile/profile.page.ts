import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private navCtrl: NavController, public alertController: AlertController, ) { }

  ngOnInit() {
  }
  async tabs() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos actualizados',
      subHeader: '',
      message: 'Se han actualizadps sus datos de manera satisfactoria.',
      buttons: ['OK']
    });
    await alert.present();
    this.navCtrl.navigateRoot(['./tabs']);
  }
}
