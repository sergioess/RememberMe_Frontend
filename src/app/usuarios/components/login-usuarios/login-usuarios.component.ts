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
      // console.log(usuario[0]);
      const lista = JSON.stringify(usuario);

      // console.log("Pass BD" + usuario[0].password);
      // console.log("Pass Ingresado" + this.passwordIngresado);

      if (usuario) {
        this.login(usuario, this.correo);
      }

      this.login(usuario, this.correo);

    });
  }

  login(token: string, email: string) {


    this.usuariosService.getUsuarioByCorreoUser(email).subscribe(usuario => {
      // console.log("Usuario" + usuario.correo);
      const lista = JSON.stringify(usuario);
      // console.log("Lista" + lista);
      // console.log("Usuario Logueado" + Utils.currentUser);
      Utils.currentUser = new Usuario();
      Utils.currentUser = usuario;
      // console.log("Usuario recien logueado: " + Utils.currentUser.id + " - " + Utils.currentUser.correo + " - " + Utils.currentUser.nombre_completo)

      // console.log("Id usuario cuando se loguea: " + Utils.currentUser.id);
      let numero: number = Utils.currentUser.id;
      numero = numero * 12;
      numero = numero / 3;
      numero = numero * 598;
      // console.log("Numero " + numero);
      let texto: string = numero.toString();
      // console.log("Texto " + texto);
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', texto);
      this.router.navigate(["tareas"]);


    });

  }

  registrar() {
    console.log("hey");
    this.router.navigate(['/registro']);
  }

}
