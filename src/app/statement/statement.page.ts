import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cheque from '../../models/Cheque';
import EstadoCheque from '../../models/Enums/EstadoCheque';
import {ComunicacionService} from 'comunicacion-http-plan-market';
// @ts-ignore
import moment from 'moment';
import {ModalController} from '@ionic/angular';
import {CheckDetailComponent} from '../components/modals/check-detail/check-detail.component';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.page.html',
  styleUrls: ['./statement.page.scss'],
})
export class StatementPage implements OnInit {

  showFilters: boolean;
  listadoCheques: Array<Cheque>;
  listadoChequesMostrar: Array<Cheque>;
  showAprobados = true;
  showRechazados = false;
  showPendientes = false;
  fechaDesde: any;
  fechaHasta: any;
  constructor(private route: Router, public modalController: ModalController) {
    this.listadoCheques = [];
    this.listadoChequesMostrar = [];
    this.showFilters = false;
    this.fechaDesde = moment().format('DD/MM/YYYY');
    this.fechaHasta = moment().format('DD/MM/YYYY');
  }

  handleShowEstados() {
    this.listadoChequesMostrar = this.listadoCheques.filter(item => {
      return item.estado === EstadoCheque.APROBADO && this.showAprobados === true
          || item.estado === EstadoCheque.RECHAZADO && this.showRechazados === true
          || item.estado === EstadoCheque.PENDIENTE && this.showPendientes === true;
    });
  }

  ngOnInit() {
    const bancos = ['Banco Pichincha', 'Banco Guayaquil', 'Banco Amazonas'];
    for (let i = 1; i < 51; i++) {
        let estado = EstadoCheque.APROBADO;
        let banco = bancos[0];
        const value = Math.random() * 100;
        const valueBanco = Math.random() * 100;
        if (value > 30 && value < 60) {
          estado = EstadoCheque.PENDIENTE;
        } else if (value > 60) {
          estado = EstadoCheque.RECHAZADO;
        }
        if (valueBanco > 30 && value < 60) {
          banco = bancos[1];
        } else if (valueBanco > 60) {
          banco = bancos[2];
        }
        this.listadoCheques.push(new Cheque(
            `123-${i.toString()}`,
            100 * i,
            estado,
            moment().format('DD/MM/YYYY'),
            banco,
            '11:00',
            '31231231',
            '123123132',
            '0.00',
            'Lorem Ipsum is simply dummy.' ));
    }
    this.handleShowEstados();
  }
  list_of_deposites() {
    this.route.navigate(['./list-of-deposites']);
  }

  async showDetailModal(cheque: any) {
    const modal = await this.modalController.create({
      component: CheckDetailComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        cheque,
      }
    });
    return await modal.present();
  }

  toogleShowFilters() {
    this.showFilters = !this.showFilters;
    // debugger
    // const api = new ComunicacionService();
    // api.ejecutarPeticionGet().then(
    //     data => console.log(data)
    // );
  }

  filterByDate() {
    const localFechaDesde = moment(this.fechaDesde , 'YYYY-MM-DD');
    const localFechaHasta = moment(this.fechaHasta, 'YYYY-MM-DD');
    if (localFechaDesde.isValid() && localFechaHasta.isValid()) {
      this.listadoChequesMostrar = this.listadoCheques.filter(item => {
        const isBetween = moment(item.fecha, 'DD/MM/YYYY').isBetween(localFechaDesde, localFechaHasta, undefined, '[]');
        return this.showFilters && (item.estado === EstadoCheque.APROBADO && this.showAprobados === true
            || item.estado === EstadoCheque.RECHAZADO && this.showRechazados === true
            || item.estado === EstadoCheque.PENDIENTE && this.showPendientes === true)
            && isBetween;
      });
    }
  }

}

