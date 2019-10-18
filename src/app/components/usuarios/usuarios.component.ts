import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  clientes : any[] = [];
  
  displayedColumns: string[] = ['photo', 'name', 'phone', 'email', 'city','operation'];
  dataSource  = [];

  constructor(private _authService: AuthService, private router:Router) { }

  ngOnInit() {

    this._authService.getClientes()
    .subscribe( (data:any) => {
      console.log(data)
      this.dataSource = data;
    },(err)=>{
      this.router.navigateByUrl('/login')      
    })
  }

  verUsuario(element:any){
    
    let usuarioId= element.id;
    
    this.router.navigate([ '/clients', usuarioId ])
  }

}
