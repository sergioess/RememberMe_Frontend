import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBitacoraComponent } from './bitacora/components/lista-bitacora/lista-bitacora.component';
import { ListaCategoriasComponent } from './categorias/components/lista-categorias/lista-categorias.component';
import { ListaTablerosComponent } from './tableros/components/lista-tableros/lista-tableros.component';
import { ListaTareasComponent } from './tareas/components/lista-tareas/lista-tareas.component';
import { RegistroUsuariosComponent } from './usuarios/components/registro-usuarios/registro-usuarios.component';

const routes: Routes = [{
  path: '',
  component: ListaTareasComponent

},
{
  path: 'tableros',
  component: ListaTablerosComponent

},
{
  path: 'bitacora',
  component: ListaBitacoraComponent
},
{
  path: 'categorias',
  component: ListaCategoriasComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
