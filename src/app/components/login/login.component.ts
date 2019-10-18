import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  forma:FormGroup;

  constructor(private _authService: AuthService, private router:Router) { }

  ngOnInit() {
    //Validación del formulario
    this.forma = new FormGroup({
      'email' : new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")  ]),
      'password' : new FormControl('', [Validators.required, Validators.minLength(9)  ]),
      'type' : new FormControl('Admin')
    })

    this.usuario = new UsuarioModel();

    this.usuario.email = '';

  }

    //método para realizar el logueo
  login(){

    Swal.fire({
      allowOutsideClick:false,
      type:'info',
      text:'Espere por favor'
    });
    
        //llamado del método login del servicio      
    this._authService.login(this.forma.value)
      .subscribe( data => {
        Swal.close()

        //redirección a la vista dashboard si los datos son correctos
        this.router.navigateByUrl('/dashboard')

        console.log(data)
      },(err)=>{
        //Alerta informando el error       
        Swal.fire({
          type:'error',
          title:'Usuario o contraseña incorrectos',
          text:'Ha ocurrido un error'
        })


      })
  }

}
