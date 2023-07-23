import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  failure:boolean = false;
  result:boolean = false;
  CityName:string = "";
  Country:string = "";
  Tempreture:string = "";
  Humdity:string = "";

  constructor(public userServ:UserService) { }

  ngOnInit(): void {
  }

  searchCity(CityName:string)
  {
      this.userServ.getweather(CityName).subscribe((data:any[])=>{
      let json = JSON.stringify(data);
      let jsonobj = JSON.parse(json);
      this.CityName = jsonobj.name;
      this.Country = jsonobj.sys.country;
      this.Tempreture = jsonobj.main.temp+String.fromCharCode(176)+"C"
      this.Humdity = jsonobj.main.humidity;
      this.result = true;
      this.failure = false;
      },(error:any)=>{
        this.failure = true;
        this.result = false;
        console.log(error);
      });
  }



}
