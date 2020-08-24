import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

  profile() {
    this.route.navigate(['./profile']);
  }
  thumb_impression() {
    this.route.navigate(['./thumb-impression']);
  }
  nearby_bank() {
    this.route.navigate(['./nearby-bank']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  terms_conditions() {
    this.route.navigate(['./terms-conditions']);
  }
  faqs() {
    this.route.navigate(['./faqs']);
  }
  support() {
    this.route.navigate(['./support']);
  }
  sing_in() {
    this.navCtrl.navigateRoot(['./sing-in']);
  }
  buyAppAction() {
    window.open("http://bit.ly/cc_OpusBanking", '_system', 'location=no');
  }
}
