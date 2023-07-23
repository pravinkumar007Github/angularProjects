import { Route } from '@angular/compiler/src/core';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {



  constructor(public usrSer : UserserviceService, public Redirect : Router, public pdtSer:ProductsService) { }

  ngOnInit(): void {

   this.pdtSer.getCartCount();

    this.pdtSer.updateCart.subscribe((data:any)=>{
      console.log(data);
      //this.cartcount++;
      this.pdtSer.getCartCount();
    });
  }

  doLogout()
  {
    localStorage.clear();
    this.pdtSer.cartcount = 0;
    this.Redirect.navigateByUrl("/login");
    

  }

  ngDoCheck()
  {
  
  }

 

}
