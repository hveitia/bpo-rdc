import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  loan_statement() {
    this.route.navigate(['./loan-statement']);
  }   
 loan_info() {
    this.route.navigate(['./loan-info']);
  } 
}
