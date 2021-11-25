import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login-usuarios',
  templateUrl: './login-usuarios.component.html',
  styleUrls: ['./login-usuarios.component.css']
})
export class LoginUsuariosComponent implements OnInit {

  passwordIngresado: string = "";
  correo: string = "";
  usuariologueado: Usuario = new Usuario();

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
  }

  loginIntent() {
    // console.log(this.correo);
    this.usuariosService.getUsuarioByCorreo(this.correo).subscribe(usuario => {
      console.log(usuario[0]);
      const lista = JSON.stringify(usuario);

      // console.log("Pass BD" + usuario[0].password);
      // console.log("Pass Ingresado" + this.passwordIngresado);

      if (this.passwordIngresado === usuario[0].password) {
        console.log("Contraseña Correcta");
        this.login(JSON.stringify(usuario[0]));
      }
      else {
        console.log("Contraseña Incorrecta");
      }
      // console.log(lista);

    });
  }

  login(token: string) {
    sessionStorage.setItem('isLoggedIn', "true");
    sessionStorage.setItem('token', token);
    this.router.navigate(["tareas"]);
  }

}
