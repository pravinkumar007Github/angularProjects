import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {
  catagorytype:string = "select"
  cleanword:string = "";
  ordinal:string = "";
  titlecase:string = "";
  reverseword:string = "";
  camelcase:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
