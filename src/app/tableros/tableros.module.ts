import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTablerosComponent } from './components/lista-tableros/lista-tableros.component';
import { ItemTablerosComponent } from './components/item-tableros/item-tableros.component';
import { TareasServiceService } from '../services/tareas-service.service';
import { BitacoraService } from '../services/bitacora.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TareasModule } from '../tareas/tareas.module';
import { DetailTableroComponent } from './components/detail-tablero/detail-tablero.component';



@NgModule({
  declarations: [
    ListaTablerosComponent,
    ItemTablerosComponent,
    DetailTableroComponent

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TareasModule
  ]
})
export class TablerosModule { }
