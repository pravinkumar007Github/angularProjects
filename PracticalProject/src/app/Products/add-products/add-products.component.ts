import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(public ajaxcall : HttpService) { }


  addproducts(pdtname:string,pdtamount:string,Active: HTMLInputElement)
  {
    var data = {"productName" :pdtname,"productAmount":pdtamount, "Active":Active}
    this.ajaxcall.addProducts(data).subscribe((responseBody) => {
      console.log(responseBody)
     });
  }

  ngOnInit(): void {
  }

}
