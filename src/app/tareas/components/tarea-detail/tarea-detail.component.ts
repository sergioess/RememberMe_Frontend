import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from '../../../models/tarea';
import { DateAdapter } from '@angular/material/core';
import { TareasServiceService } from 'src/app/services/tareas-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bitacora } from '../../../models/bitacora';
import { BitacoraService } from 'src/app/services/bitacora.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriasServiceService } from 'src/app/services/categorias-service.service';
import { Utils } from '../../../common/utils';
import { BitacoraRefreshService } from '../../../services/bitacora-refresh.service';



@Component({
  selector: 'app-tarea-detail',
  templateUrl: './tarea-detail.component.html',
  styleUrls: ['./tarea-detail.component.css']
})
export class TareaDetailComponent implements OnInit {
  listaCategorias: Categoria[] = [];
  selected = 'none';



  datoTarea: Tarea = new Tarea();
  color1: string = "";
  color2: string = "";
  color3: string = "";

  bgcolor1: string = "#FFFFFF";
  bgcolor2: string = "#FFFFFF";
  bgcolor3: string = "#FFFFFF";
  bgcolor4: string = "#FFFFFF";
  bgcolor5: string = "#FFFFFF";

  checked: boolean = false;
  habilita: boolean = true;

  fechaLimiteDetalle: string = "";

  estadoActualTarea: number = 0;
  prioridadActualTarea: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dateAdapter: DateAdapter<Date>,
    private tareaService: TareasServiceService,
    private router: Router, private _snackBar: MatSnackBar,
    private bitacoraService: BitacoraService,
    private categoriaService: CategoriasServiceService,
    private _bitacoraRefreshService: BitacoraRefreshService) {
    this.dateAdapter.setLocale('es-CO'); //dd/MM/yyyy
  }

  ngOnInit(): void {
    this.datoTarea = this.data.item;
    this.cambiaEstado(this.datoTarea.estado);
    this.prioridad(this.datoTarea.prioridad);
    this.fechaLimiteDetalle = this.datoTarea.fechalimite;
    this.estadoActualTarea = this.datoTarea.estado;
    this.prioridadActualTarea = this.datoTarea.prioridad;
    this.traerCategorias(Utils.currentUser.id);
  }

  prioridad(priorSel: number): void {
    this.datoTarea.prioridad = priorSel;
    this.bgInitWhite();
    switch (priorSel) {
      case 1:
        this.bgcolor1 = "#00FFFF";
        break;
      case 2:
        this.bgcolor2 = "#00FFFF";
        break;
      case 3:
        this.bgcolor3 = "#00FFFF";
        break;
      case 4:
        this.bgcolor4 = "#00FFFF";
        break;
      case 5:
        this.bgcolor5 = "#00FFFF";
        break;
    }
    // console.log(this.datoTarea.fechalimite);

  }

  bgInitWhite() {
    this.bgcolor1 = "#FFFFFF";
    this.bgcolor2 = "#FFFFFF";
    this.bgcolor3 = "#FFFFFF";
    this.bgcolor4 = "#FFFFFF";
    this.bgcolor5 = "#FFFFFF";
  }

  cambiaEstado(estado: number) {
    switch (estado) {

      case 1:
        this.color1 = "bg-danger";
        this.color2 = "bg-white";
        this.color3 = "bg-white";
        this.datoTarea.estado = 1
        break;
      case 2:
        this.color1 = "bg-danger";
        this.color2 = "bg-secondary";
        this.color3 = "bg-white";
        this.datoTarea.estado = 2
        break;
      case 3:
        this.color1 = "bg-danger";
        this.color2 = "bg-secondary";
        this.color3 = "bg-warning";
        this.datoTarea.estado = 3
        break;
    }
  }

  aceptar(): void {
    this.datoTarea.fechalimite = this.fechaLimiteDetalle;
    this.tareaService.updateTarea(this.datoTarea.id, this.datoTarea).subscribe(tareas => {

      const lista = JSON.stringify(tareas);
      // console.log(lista);
      // this.crearRegistroBitacora("Tarea Actualizada");
      let texto: string = "Tarea Actualizada ";
      if (this.estadoActualTarea != this.datoTarea.estado) {
        switch (this.datoTarea.estado) {

          case 1:
            texto += " Estado cambiado a Creado";
            break;
          case 2:
            texto += " Estado cambiado a En Proceso";
            break;
          case 3:
            texto += " Estado cambiado a Terminado";
            break;
        }
      }

      if (this.prioridadActualTarea != this.datoTarea.prioridad) {
        texto += " Prioridad cambia a " + this.datoTarea.prioridad;
      }

      this.crearRegistroBitacora(texto);


      this.router.navigateByUrl("tareas");

      //TODO:
      this._bitacoraRefreshService.sendValor(1);

    });
  }

  crearRegistroBitacora(texto: string): void {
    let bitacoraNew = new Bitacora();
    bitacoraNew.descripcion = texto;
    bitacoraNew.id_tareas = this.datoTarea.id;
    bitacoraNew.id_usuario = Utils.currentUser.id;

    this.bitacoraService.createBitacora(bitacoraNew).subscribe(bitacora => {

      const lista = JSON.stringify(bitacora);
      // console.log(lista);
      let bicacoraJustCreated = new Bitacora();
      bicacoraJustCreated = bitacora.body.tarea;
      // console.log(bicacoraJustCreated)
    });
  }



  navigate(ruta: string) {
    // console.log(serie);
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
    this.router.onSameUrlNavigation = 'ignore';
    this.router.navigate([ruta]);
  }

  eliminar() {
    // console.log("Click eliminar");
    this._snackBar.open("Tarea Eliminada", 'Dismiss', { duration: 3000, verticalPosition: 'bottom', panelClass: ['red-snackbar'] });
    this.crearRegistroBitacora("Tarea Eliminada");
    this.navigate("/");
  }

  esChecked(): void {
    {
      if (this.checked) {
        this.habilita = true;
      }
    }
  }
  traerCategorias(id_usuario: number) {
    // console.log("entra traerCategorias");
    this.categoriaService.getCategorias(id_usuario).subscribe(categorias => {
      this.listaCategorias = categorias;
      const lista = JSON.stringify(categorias);
      // console.log(lista);

    });
  }



}
