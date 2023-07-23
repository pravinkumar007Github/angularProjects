import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicpage',
  templateUrl: './dynamicpage.component.html',
  styleUrls: ['./dynamicpage.component.css']
})
export class DynamicpageComponent implements OnInit {

  ViewMode = "Home"

  constructor() { }

  ngOnInit(): void {
  }

}
