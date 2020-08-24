import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imps',
  templateUrl: './imps.page.html',
  styleUrls: ['./imps.page.scss'],
})
export class ImpsPage implements OnInit {
from_account: string = "1"; 
account_holder_name: string = "1"; 
  constructor(private route: Router) { }

  ngOnInit() {
  }
	

transfered_successfully() {
    this.route.navigate(['./transfered-successfully']);
  } 

}
