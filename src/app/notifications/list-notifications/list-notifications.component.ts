import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion } from '../../models/notificacion';
import { NotificationsService } from '../../services/notifications.service';
import { Utils } from '../../common/utils';

@Component({
  selector: 'app-list-notifications',
  templateUrl: './list-notifications.component.html',
  styleUrls: ['./list-notifications.component.css']
})
export class ListNotificationsComponent implements OnInit {

  listNotifications: Notificacion[] = [];

  constructor(private router: Router,
    private notificacionService: NotificationsService) { }

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

}
