import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCategoriasComponent } from './components/lista-categorias/lista-categorias.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ItemCategoriasComponent } from './components/item-categorias/item-categorias.component';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { CategoriaFormComponent } from './components/categoria-form/categoria-form.component';



@NgModule({
  declarations: [
    ListaCategoriasComponent,
    ItemCategoriasComponent,
    ConfirmationDialogComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class CategoriasModule { }
