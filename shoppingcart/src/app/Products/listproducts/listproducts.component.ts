import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  products:any[] = [];

  constructor(public pdtSer :ProductsService, public ActiveRoute: ActivatedRoute , public usrSer : UserserviceService, public Redirect:Router) { }

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe((parms:Params)=>{
      if(parms.catid)
      {
        this.pdtSer.getProductsByCatwise(parms.catid).subscribe((data:any[])=>{
          this.products = data
        },(error:any)=>{
          console.log(error);
        }, ()=>{
          console.log("Completed")
        })
      }
      else{
         this.pdtSer.getProductsList().subscribe((data:any[])=>{
           this.products = data;
         },(error:any)=>{
           console.log(error);
         })
      }
    })

   
  }

  addToCart(cartPdtId:number,cartPdtPrice:number)
  {
      this.pdtSer.addToMyCart(cartPdtId,cartPdtPrice).subscribe((data:string)=>{
        console.log(data);
        this.pdtSer.updateCart.next("event emitted");
      }, (error:any)=>{
        console.log(error)
      })
     }
   

}
