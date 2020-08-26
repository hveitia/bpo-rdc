import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  tipoIdentificacion: any;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  verification() {
    if (this.tipoIdentificacion === '1') {
      this.route.navigate(['./external-validation']);
    } else {
      this.route.navigate(['./password-validation']);
    }
  }
}
