import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public Redirect:Router) { }

  ngOnInit(): void {
  }

  whether()
  {
    this.Redirect.navigateByUrl("/weather")
  }

  news()
  {
    this.Redirect.navigateByUrl("/news")
  }

}
