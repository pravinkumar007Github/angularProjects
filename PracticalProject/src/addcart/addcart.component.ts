import { Component } from "@angular/core";

@Component({
    selector: 'app-addcart',
    templateUrl : './addcart.component.html',
   

})

export class AddcartComponent {
   
  public CartCount = 0;
  public errormessage:string = "";
  color:string = "red";

public  addCart()
{

 this.CartCount = this.CartCount +1;
 this.errormessage = "";
}

public removecart()
{
   if(this.CartCount > 0)
   {
      this.CartCount = this.CartCount - 1;
   }
   else
   {
       this.errormessage = "No Items added in cart"
   }
}


}