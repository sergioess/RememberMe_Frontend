import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from '../../models/notificacion';
import { NotificationsService } from '../../services/notifications.service';
import { Utils } from '../../common/utils';
import { NotificationUread } from '../../models/notification-uread';
import { TablerosService } from 'src/app/services/tableros.service';

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.css']
})
export class ListNotificationsComponent implements OnInit {

  listNotifications: NotificationUread[] = [];

  constructor(private router: Router,
    private notificacionService: NotificationsService,
    private tablerosService: TablerosService) { }

  ngOnInit(): void {
    this.traerNotificaciones();
  }


  traerNotificaciones(): void {

    this.notificacionService.getUnreadNotifications(Utils.currentUser.id).subscribe(notificaciones => {
      this.listNotifications = notificaciones;
      const lista = JSON.stringify(notificaciones);
      console.log(lista);

    });
  }

  aceptar(item: NotificationUread) {


    //en tarea_coalborador marca aceptada la invitacion
    this.cambiaAceptaTableroColaborador(item);

    //Llama a notificacion Leida
    // this.notificacionLeida(item);

    this.ngOnInit();
  }

  rechazar(item: NotificationUread) {

    //en tarea_coalborador marca aceptada la invitacion
    // this.cambiaAceptaTableroColaborador( item);

    //Llama a notificacion Leida
    this.notificacionLeida(item);

    this.ngOnInit();

  }

  cambiaAceptaTableroColaborador(item: NotificationUread) {

    const lista = JSON.stringify(item);
    console.log("Invitacion Aceptada" + lista);

    this.tablerosService.updateEstadoAceptado(1, item).subscribe(tablero => {
      this.listNotifications = tablero;
      const lista = JSON.stringify(tablero);
      console.log("Invitacion Aceptada" + lista);
    });
  }

  notificacionLeida(item: NotificationUread) {
    this.notificacionService.updateReadNotification(item.id).subscribe(notificacion => {
      this.listNotifications = notificacion;
      const lista = JSON.stringify(notificacion);
      console.log("Notificacion Leida" + lista);
    });
  }

}
