import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})

export class UserService {
 
  private loginUserUrl = "http://localhost:3000/user/login"
  private registerUserUrl = "http://localhost:3000/user/register";
  private getallUserUrl = "http://localhost:3000/user/all"
  private deleteUserUrl = "http://localhost:3000/user/delete/"



  constructor(private http:HttpClient) { }
  registerUser(user: any) {
    return this.http.post<any>(this.registerUserUrl, user);
  }
  Login(user:any){
    return this.http.post<any>(this.loginUserUrl, user);

  }
  getUserAll() {
    return this.http.get<any>(this.getallUserUrl)
  }
  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }
  isLoggedIn() {
    let token = localStorage.getItem("myToken");
    if (token) {
      return true;
    }
    else {
      return false;
    }
  }
  isLoggedAdmin() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "admin") {
        return true
      }
      else {
        return false
      }

    }
    else {
      return false;
    }
  }
  isLoggedClient() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "client") {
        return true
      }
      else {
        return false
      }

    }
    else {
      return false;
    }
  }
}
