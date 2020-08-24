import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.page.html',
  styleUrls: ['./fund-transfer.page.scss'],
})
export class FundTransferPage implements OnInit {
 from_account: string = "1"; 
  constructor( private route: Router) { }

  ngOnInit() {
  }

  add_beneficiary() {
    this.route.navigate(['./add-beneficiary']);
  } 
	
transfered_successfully() {
    this.route.navigate(['./transfered-successfully']);
  } 
}
