import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService:AuthService, private route:Router){

  }

  canActivate():  boolean {
    
    if ( this._authService.estaAutenticado()) {
      return true;
    }else{
      this.route.navigateByUrl('/login')
    }
  }
  
}
