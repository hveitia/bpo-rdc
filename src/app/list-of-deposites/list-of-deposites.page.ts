import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-deposites',
  templateUrl: './list-of-deposites.page.html',
  styleUrls: ['./list-of-deposites.page.scss'],
})
export class ListOfDepositesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

upload_deposite() {
    this.route.navigate(['./upload-deposite']);
  }

}
