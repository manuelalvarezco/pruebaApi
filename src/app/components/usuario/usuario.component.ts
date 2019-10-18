import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  cliente:any = {}

  constructor(private route:ActivatedRoute, private _authService:AuthService, private router:Router) { 
    this.route.params.subscribe( params =>{
      this.getCliente( params['id']);
    })
  }

  ngOnInit() {
  }

  getCliente(id:string){
    this._authService.getCliente(id)
      .subscribe( cliente => {
        console.log(cliente)
        this.cliente = cliente;
      },(err)=>{
        this.router.navigateByUrl('/login')
      } )
  }

}
