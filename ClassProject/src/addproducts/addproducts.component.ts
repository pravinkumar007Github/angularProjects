import { Component } from "@angular/core";

@Component({
    selector: 'app-addproducts',
    templateUrl:'./addproducts.component.html'
    
    
})

export  class addproductComponent{

     public productArray:{ProductName:string,ProductAmount:string }[] = []
     public ArrayObject = {ProductName:"",ProductAmount:""};
   

    public AddProdcts(productname:string,productamount:string)
    {
        this.ArrayObject.ProductName = productname;
        this.ArrayObject.ProductAmount = productamount;
        this.productArray.push(this.ArrayObject)
        console.log(this.productArray);
        console.log(this.ArrayObject)
        
    }


}