import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-transfer-options',
  templateUrl: './fund-transfer-options.page.html',
  styleUrls: ['./fund-transfer-options.page.scss'],
})
export class FundTransferOptionsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  fund_transfer() {
    this.route.navigate(['./fund-transfer']);
  }  
 imps() {
    this.route.navigate(['./imps']);
  } 
}
