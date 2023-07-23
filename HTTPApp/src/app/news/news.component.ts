import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public usrServ : UserService) { }

  is_newsDetails : boolean;

  news_Details_data:any;

  ngOnInit(): void {
  }

  ddlchange(value:string)
  {
    this.is_newsDetails = false
    if(value != "--Select--")
    {
      this.usrServ.getNews(value).subscribe((data:any[])=>{
        let json = JSON.stringify(data);
        let jsonobj = JSON.parse(json);
        this.news_Details_data = jsonobj.articles;
        this.is_newsDetails = true
      },(error:any)=>{
        this.is_newsDetails = false
        console.log(error)
      })
    }
  }

}
