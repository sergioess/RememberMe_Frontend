import { Component, OnInit } from '@angular/core';
import { TablerosService } from '../../../services/tableros.service';
import { Tablero } from '../../../models/tablero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-tablero',
  templateUrl: './detail-tablero.component.html',
  styleUrls: ['./detail-tablero.component.css']
})
export class DetailTableroComponent implements OnInit {


  detalleTablero!: Tablero;

  constructor(private tablerosService: TablerosService,
    private router: Router) { }


  ngOnInit(): void {
    this.detalleTablero = this.tablerosService.tableroPasaDetail;
    console.log(this.detalleTablero);
  }

  regresar() {
    this.router.navigate(['tableros']);
  }

}
