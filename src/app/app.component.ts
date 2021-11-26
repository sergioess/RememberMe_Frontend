import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';
import { Utils } from 'src/app/common/utils';
import { UsuariosService } from './services/usuarios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rememberme';

  datosUsuario: Usuario = new Usuario();



  constructor(private router: Router, private usuarioService: UsuariosService) { }


  ngOnInit(): void {
    setInterval(() => {
      this.datosUsuario = Utils.currentUser;
      // console.log(this.datosUsuario)
    }, 1000)

  }

  logout(): void {
    sessionStorage.setItem('isLoggedIn', 'false');
    sessionStorage.removeItem('token');

    this.navigate("/");
  }


  navigate(ruta: string) {
    // console.log(serie);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([ruta]);
  }

  validaUsuarioLogueado(): boolean {
    if (this.usuarioService.isAuthenticated()) {
      return false;
    }
    else {
      return true;
    }
  }


}
