import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { ProductsService } from 'src/app/products.service';

declare var $:any;

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit, DoCheck {

  myCartitems :any[] = [];
  myCartFinalPrice :number;
  msg:string;
  errormsg:string;
  is_disabled:boolean = true;

  constructor(public pdtSer:ProductsService, public Redirect:Router, ) { }

  ngOnInit(): void {
    this.pdtSer.getCartItems().subscribe((data:any[])=>{
     console.log(data)
     this.myCartitems = data;
     this.myCartFinalPrice = 0;
     for(let x in this.myCartitems)
     {
       this.myCartFinalPrice += this.myCartitems[x].cartPdtPrice;
     }
    },(error:any)=>{
       console.log(error)
       if(error.status == 401)
       {
         localStorage.clear();
        this.Redirect.navigateByUrl("/login")
       }
    })
  }

  updateCart(cartID:number,cartQty:number,pdtPrice:number,id:number)
  {
    if(cartQty == 0)
    {
      $('#btnminus'+id).attr('disabled','disabled');
    }
    else
    {
      $('#btnminus'+id).removeAttr('disabled');
      this.pdtSer.updateMyCartItems(cartID,cartQty,pdtPrice).subscribe((data:string)=>{
        console.log(data)
        this.msg = data;
        var index = this.myCartitems.findIndex((obj)=>{
         return obj._id == cartID;
        })
        this.myCartitems[index].cartQty = cartQty;
        this.myCartitems[index].cartPdtPrice = cartQty*pdtPrice;
        this.myCartFinalPrice = 0;
        for(let x in this.myCartitems)
        {
          this.myCartFinalPrice += this.myCartitems[x].cartPdtPrice;
        }
    
        },(error:any)=>{
         console.log(error)
         this.errormsg = "Something went wrong"
        });
    }
  
  }

  removeCart(delId:number)
  {
     this.pdtSer.removeMyCartItem(delId).subscribe((data:string)=>{
      this.msg = data;

      this.myCartitems = this.myCartitems.filter((obj)=>{
       return obj._id != delId;
      })

      this.myCartFinalPrice = 0;
        for(let x in this.myCartitems)
        {
          this.myCartFinalPrice += this.myCartitems[x].cartPdtPrice;
        }

        this.pdtSer.getCartCount();
     },(error:any)=>{
      this.errormsg = "Something went wrong";
     })
  }

  ngDoCheck()
  {
  
  }


}
