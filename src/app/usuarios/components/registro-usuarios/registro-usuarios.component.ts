import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  usuarioForm: FormGroup;
  
  constructor(private fb: FormBuilder) { 
    this.usuarioForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmar_password: ['', Validators.required],
      nombre_completo: ['', Validators.required],
      correo: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  registrarUsuario(){
    console.log(this.usuarioForm);
  }

}
