import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {ComunicacionService} from 'comunicacion-http-plan-market';
import {UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.page.html',
  styleUrls: ['./sing-in.page.scss'],
})
export class SingInPage implements OnInit {

  usuario: string;
  constructor(private navCtrl: NavController, private route: Router, private  usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  tabs() {
    this.navCtrl.navigateRoot(['./tabs']);
  }
  sign_up() {
    this.route.navigate(['./sign-up']);
  }
  verification() {
    const api = new ComunicacionService();
    const data = api.login(true, '', '');
    if (data.codigo === 0) {
      this.usuarioService.setNombre(data.data.nombre);
      this.usuarioService.setCelular(this.usuario);
      this.usuarioService.setEmail(data.data.celular);
      this.route.navigate(['./verification']);
    }
  }

}
