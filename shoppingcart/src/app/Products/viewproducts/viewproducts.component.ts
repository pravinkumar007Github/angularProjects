import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
declare var $:any;
@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})


export class ViewproductsComponent implements OnInit {
  
  productsdata:any[] = [];
  similarproducts:any[] = [];
  constructor(public ActiveRoute: ActivatedRoute, public pdtSer:ProductsService) { }

  ngOnInit(): void {

    $('#example').click(()=>{
      console.log("Mouse over")
      $('#example').okzoom({
        width: 150,
        height: 150,
        border: "1px solid black",
        shadow: "0 0 5px #000"
      });
    });

    this.ActiveRoute.params.subscribe((parms:Params)=>{
     if(parms.pdtid)
     {
       this.pdtSer.getProductById(parms.pdtid).subscribe((data:any[])=>{
        
        this.productsdata = data
       
       },(error:any)=>{

       })
       this.pdtSer.getSimilarProductById(parms.pdtid).subscribe((data:any[])=>{
      console.log(data);
       this.similarproducts = data
      
      },(error:any)=>{

      })

     }
    });
  
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
