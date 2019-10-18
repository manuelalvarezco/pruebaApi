import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private _authSeervice:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this._authSeervice.logout();
    this.router.navigateByUrl('/login')
  }

}
