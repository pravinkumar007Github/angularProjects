import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers':'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials':'true'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:44372/User/GetUserDetails";
  apipostURL = "https://localhost:44372/User/Passenger_User_Insert"
  apigetPassngerURL = "https://localhost:44372/User/GetPassengerDetails"
  addproductsURL = "http://localhost:3001/postdata"
  apiUserList = "http://localhost/api/POCApi.php"
  constructor(private httpClient: HttpClient) { }
  sendGetRequest() {
    return this.httpClient.get(this.apiUrl);
  }

  getPassengerDetailsRequest()
  {
    return this.httpClient.get(this.apigetPassngerURL);
  }

  postdata(data:any)
  {
    return this.httpClient.post(this.apipostURL,data)
  }

  addProducts(data:any)
  {
    
    return this.httpClient.post(this.addproductsURL,data,httpOptions)
  }
  getuserlist(type:string)
  {
    return this.httpClient.get(this.apiUserList+"?Method_Name="+type);
  }
  filteruserlist(type:string,filter_value:string)
  {
    return this.httpClient.get(this.apiUserList+"?Method_Name="+type+"&"+"Filter_Value="+filter_value);
  }
  addUsers(data:any)
  {
    return this.httpClient.post(this.apiUserList,data);
  }
  updateUsers(data:any)
  {
    return this.httpClient.post(this.apiUserList,data);
  }
  deleteUsers(data:any)
  {
    return this.httpClient.post(this.apiUserList,data);
  }
}
