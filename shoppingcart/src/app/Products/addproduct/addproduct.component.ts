import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
declare var swal:any
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  imgPreview:boolean = false;
  public selectImg:any;

  constructor(public pdtServ:ProductsService, public Redirect:Router) { }

  ngOnInit(): void {
  }

  imgUpload(event:any)
  {
    this.selectImg = event.target.files[0];
  }

  addproducts(pdt_cat_typ:string,pdt_name:string,pdt_amt:string,pdt_desc:string)
  {
   
       var fd = new FormData();
       fd.append("Category_Type",pdt_cat_typ);
       fd.append("Product_Name",pdt_name);
       fd.append("Product_Amount",pdt_amt);
       fd.append("Product_Description",pdt_desc);
       fd.append("Product_Img",this.selectImg,"productImage");
       this.pdtServ.addproducts(fd).subscribe((data:string)=>{
        swal({
          title: "Data Saved Successfuly!",
          text: "Your products added successfully",
          icon: "success",
      }).then(() => {
        this.Redirect.navigateByUrl("/");
      });
       },(error:any)=>{
        swal({
          title: "Error..!",
          text: "Something went wrong....",
          icon: "error",
      });
       })
  }

}
