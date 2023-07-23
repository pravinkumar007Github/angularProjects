import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //updateCart = new EventEmitter();

  updateCart = new Subject();
  category_list:any;

  category_type:string;
  cartcount:number = 0;
  constructor(public http : HttpClient) {
   this.category_type = "ALL";

   }
  
   getCartCount()
   {
     this.getMyCartCount().subscribe((data:number)=>{
       this.cartcount = data;
      });
   }

  getProductsList()
  {
    return  this.http.get<any[]>("http://localhost:3000/listproducts")
  }

  getCartItems()
  {
    return  this.http.get<any[]>("http://localhost:3000/cartitems"/*,{
      headers: new HttpHeaders({
        'myauthtoken':'dfgdfgdfgdfgdfgdfgdf'
      })
    }*/)
  }

  getCategory()
  {
      return this.http.get<any[]>("http://localhost:3000/getCategory")
  }

  addproducts(data:any)
  {
    return this.http.post<string>("http://localhost:3000/addproducts",data)
  }

  getProductsByCatwise(catid:string)
  {
    return this.http.get<any[]>("http://localhost:3000/getpdtcatwise/"+catid);
  }

  getCategories()
  {
    return this.http.get<any[]>("http://localhost:3000/getcategories");
  }

  addToMyCart(cartPdtId:number,cartPdtPrice:number)
  {
    return this.http.post<string>("http://localhost:3000/addtocart",{cartPdtId:cartPdtId,cartPdtPrice:cartPdtPrice})
  }

  getMyCartCount()
  {
    return this.http.get<number>("http://localhost:3000/cartcount")
  }

  updateMyCartItems(cartID:number,cartQty:number,pdtPrice:number)
  {
     return this.http.put<string>("http://localhost:3000/updatecart",{cartID:cartID,cartQty:cartQty,pdtPrice:pdtPrice})
  }

  removeMyCartItem(cartId:number)
  {
    return this.http.delete<string>("http://localhost:3000/removecart/"+cartId);
  }

  getProductById(pdtId:number)
  {
    return this.http.get<any[]>("http://localhost:3000/getproductbyId/"+pdtId)
  }

  getSimilarProductById(pdtId:number)
  {
    return this.http.get<any[]>("http://localhost:3000/getsimilarproduct/"+pdtId)
  }
}
