import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://api.phx.com.co';

  auth_token:string;


  // 'https://api.phx.com.co/login';
  // https://api.phx.com.co/clients?page=1&per_page=10

  // Authorization : Bearer token $token

  constructor(private http:HttpClient) { }

  login(usuario:UsuarioModel){
    
    let headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    })
    
    let authData = {
      email:usuario.email,
      password:usuario.password,
      type:usuario.type
    }

    let body = JSON.stringify(authData);

    return this.http.post(
      `${this.url}/login`,
      authData,
      {headers}
    ).pipe(
      map( resp=>{
        this.guardarToken( resp['data']['auth_token']);
        return resp;
      })
    )
  }

  logout(){
    localStorage.removeItem('auth_token');
  }

  private guardarToken(auth_token:string){
    this.auth_token = auth_token;
    localStorage.setItem('auth_token', auth_token)
  }

  leerToken(){
    if(localStorage.getItem('auth_token')){
      this.auth_token = localStorage.getItem('auth_token');
    }else{
      this.auth_token = '';
    }

    return this.auth_token;
  }

  estaAutenticado():boolean{
    if(!this.leerToken()){
      return false;
    }

    return true;
  }

}
