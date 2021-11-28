import { Component, OnInit } from '@angular/core';
import { Tablero } from 'src/app/models/tablero';

import { UsuariosService } from '../../../services/usuarios.service';
import { Utils } from '../../../common/utils';
import { TablerosService } from 'src/app/services/tableros.service';


@Component({
  selector: 'app-lista-tableros',
  templateUrl: './lista-tableros.component.html',
  styleUrls: ['./lista-tableros.component.css']
})
export class ListaTablerosComponent implements OnInit {

  listaTableros: Tablero[] = [];


  constructor(private tableroService: TablerosService,
    private usuarioService: UsuariosService) { }

  ngOnInit(): void {

    if (this.usuarioService.isAuthenticated()) {
      this.traerTablerosUsr();
    }
    else {
      this.navigate("/");
    }
  }
  navigate(arg0: string) {
    throw new Error('Method not implemented.');
  }


  traerTablerosUsr() {
    this.tableroService.getTablerosUsuario(Utils.currentUser.id).subscribe(tableros => {
      this.listaTableros = tableros;
      const lista = JSON.stringify(tableros);
      console.log(lista);

    });
  }

}
