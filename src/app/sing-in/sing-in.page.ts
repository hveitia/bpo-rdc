import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.page.html',
  styleUrls: ['./sing-in.page.scss'],
})
export class SingInPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }
  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
  sign_up() {
    this.route.navigate(['./sign-up']);
  }
  verification() {
    this.route.navigate(['./verification']);
  }

}
