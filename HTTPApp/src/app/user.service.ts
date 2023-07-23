import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getUserDetails()
  {
     return this.http.get<any[]>('./assets/data/UsersData.json');
  }

  isLoggedIn()
  {
    return !!localStorage.getItem("Token");
  }

  getUserName()
  {
    return localStorage.getItem("UserName");
  }

  getweather(city:string)
  {
    let querryparms = new HttpParams();
    querryparms = querryparms.append("q",city);
    querryparms = querryparms.append("appid","3a3eb62e70b9745f96cb7c04245a9cb8")
    return this.http.get<any[]>("http://api.openweathermap.org/data/2.5/weather",{
      params:querryparms
    })
  }

  getNews(catagory:string)
  {
    let querryparms = new HttpParams();
    querryparms = querryparms.append("country","in");
    if(catagory != "All")
    {
      querryparms = querryparms.append("category",catagory);
    }
    querryparms = querryparms.append("apiKey","408b4153b994422d8638da72f2d3ac5b")
    return this.http.get<any[]>("https://newsapi.org/v2/top-headlines",{
      params:querryparms
    })
  }


}
