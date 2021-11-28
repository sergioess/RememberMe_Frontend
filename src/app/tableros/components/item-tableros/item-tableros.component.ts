import { Component, Input, OnInit } from '@angular/core';

import { Utils } from 'src/app/common/utils';
import { ToastrService } from 'ngx-toastr';

import { BitacoraService } from 'src/app/services/bitacora.service';
import { Bitacora } from '../../../models/bitacora';
import { TablerosService } from 'src/app/services/tableros.service';
import { Tablero } from '../../../models/tablero';
import { Tarea } from '../../../models/tarea';
import { TareasServiceService } from '../../../services/tareas-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-tableros',
  templateUrl: './item-tableros.component.html',
  styleUrls: ['./item-tableros.component.css']
})
export class ItemTablerosComponent implements OnInit {
  @Input() item: Tablero = new Tablero();

  listaTareas: Tarea[] = [];


  constructor(private tareaService: TareasServiceService,
    private tablerosService: TablerosService,
    private router: Router) { }

  ngOnInit(): void {
    this.traerTareas();
    this.tablerosService.tableroPasaDetail = new Tablero();
  }

  traerTareas() {
    // console.log(Utils.currentUser.id);
    this.tareaService.getTareasTablero(this.item.id).subscribe(tareas => {
      this.listaTareas = tareas;
      const lista = JSON.stringify(tareas);
      // console.log(lista);

    });

  }

  abreTablero() {
    // console.log("Abre tablero");
    this.tablerosService.tableroPasaDetail = this.item;
    this.router.navigate(['detalletablero']);
  }

  ngOnDestroy() {
  }

}
