import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nombre: string;
  email: string;
  celular: string;
  constructor(private navCtrl: NavController, public alertController: AlertController, private  usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.nombre = this.usuarioService.getNombre();
    this.email = this.usuarioService.getEmail();
    this.celular = this.usuarioService.getCelular();
  }
  async tabs() {
    this.usuarioService.setNombre(this.nombre);
    this.usuarioService.setCelular(this.celular);
    this.usuarioService.setEmail(this.email);
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Datos actualizados',
      subHeader: '',
      message: 'Se han actualizadps sus datos de manera satisfactoria.',
      buttons: ['OK']
    });
    await alert.present();
    this.navCtrl.navigateRoot(['./tabs']);
  }
}
