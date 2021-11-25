import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBitacoraComponent } from './bitacora/components/lista-bitacora/lista-bitacora.component';
import { ListaCategoriasComponent } from './categorias/components/lista-categorias/lista-categorias.component';
import { ListaTablerosComponent } from './tableros/components/lista-tableros/lista-tableros.component';
import { ListaTareasComponent } from './tareas/components/lista-tareas/lista-tareas.component';
import { AboutComponent } from './components/about/about.component';
import { LoginUsuariosComponent } from './usuarios/components/login-usuarios/login-usuarios.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: LoginUsuariosComponent

},
{
  path: 'tableros',
  component: ListaTablerosComponent

},
{
  path: 'bitacora', component: ListaBitacoraComponent, canActivate: [AuthGuard]
},
// {
//   path: 'bitacora',
//   component: ListaBitacoraComponent
// },
{
  path: 'categorias',
  component: ListaCategoriasComponent

},
{
  path: 'about',
  component: AboutComponent

},
{
  path: 'tareas',
  component: ListaTareasComponent

},
{
  path: 'login',
  component: LoginUsuariosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
