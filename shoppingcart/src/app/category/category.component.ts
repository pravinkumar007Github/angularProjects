import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(public pdtServ: ProductsService, public Redirect:Router, public activeRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.pdtServ.getCategory().subscribe((data:any[])=>{
      console.log(data);
      this.pdtServ.category_list = data;
      },(error:any)=>{
       console.log(error);
      });
  }

  Cat_tye(type:string)
  {
    
    this.pdtServ.category_type = type;
  }

}
