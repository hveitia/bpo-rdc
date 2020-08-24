import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-statement',
  templateUrl: './loan-statement.page.html',
  styleUrls: ['./loan-statement.page.scss'],
})
export class LoanStatementPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
  list_of_deposites() {
    this.route.navigate(['./list-of-deposites']);
  } 


}
