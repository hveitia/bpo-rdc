import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    nombre: string;
    email: string;
    celular: string;
  constructor(private route: Router, private  usuarioService: UsuarioService) {
  }

    ionViewWillEnter(){
        this.nombre = this.usuarioService.getNombre();
        this.email = this.usuarioService.getEmail();
        this.celular = this.usuarioService.getCelular();
    }
  ngOnInit() {
  }

    upload_deposite() {
        this.route.navigate(['./upload-deposite']);
    }
  statement() {
    this.route.navigate(['./statement']);
  }
 account() {
    this.route.navigate(['./account']);
  }
 fund_transfer_options() {
    this.route.navigate(['./fund-transfer-options']);
  }
 loan() {
    this.route.navigate(['./loan']);
  }
 list_of_deposites() {
    this.route.navigate(['./list-of-deposites']);
  }
 loan_info() {
    this.route.navigate(['./loan-info']);
  }



}
