import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  userRegistrationDetails(registerDetails:any){
    const url="http://localhost:3000/users/registerUser";
    return this.http.post(url,registerDetails)
  }

  loginDetails(loginFormDetails:any){
    const url="http://localhost:3000/users/login"
    return this.http.post(url,loginFormDetails);
  }
}
