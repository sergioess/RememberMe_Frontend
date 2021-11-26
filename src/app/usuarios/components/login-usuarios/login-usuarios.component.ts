import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario';
import { Utils } from 'src/app/common/utils';

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
    let userLoguear = new Usuario();
    userLoguear.correo = this.correo;
    userLoguear.password = this.passwordIngresado;

    this.usuariosService.getUsuarioByCorreo(userLoguear).subscribe(usuario => {
      console.log(usuario[0]);
      const lista = JSON.stringify(usuario);

      // console.log("Pass BD" + usuario[0].password);
      // console.log("Pass Ingresado" + this.passwordIngresado);

      if (usuario === "true") {
        this.login(usuario, this.correo);
      }



    });
  }

  login(token: string, email: string) {


    this.usuariosService.getUsuarioByCorreoUser(email).subscribe(usuario => {
      console.log(usuario);
      const lista = JSON.stringify(usuario);

      Utils.currentUser = usuario;
    });
    sessionStorage.setItem('isLoggedIn', "true");
    sessionStorage.setItem('token', token);
    this.router.navigate(["tareas"]);
  }

  registrar() {
    console.log("hey");
    this.router.navigate(['/registro']);
  }

}
