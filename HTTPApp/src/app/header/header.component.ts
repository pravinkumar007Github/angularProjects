import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserName:string;

  constructor(public usrServ: UserService, public Redirect:Router) { }

  ngOnInit(): void {
    
  }

  Login()
  {
    
     this.Redirect.navigateByUrl("/")
    
     
  }
  Logout()
  {
    localStorage.clear();
    this.Redirect.navigateByUrl("/")
  }

  weather()
  {
    this.Redirect.navigateByUrl("/weather");
  }

  news()
  {
    this.Redirect.navigateByUrl("/news")
  }

}
