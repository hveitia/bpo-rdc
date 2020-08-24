import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.page.html',
  styleUrls: ['./add-beneficiary.page.scss'],
})
export class AddBeneficiaryPage implements OnInit {
 from_account: string = "1"; 
  constructor() { }

  ngOnInit() {
  }

}
