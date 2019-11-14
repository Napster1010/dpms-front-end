import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, 
              private router: Router) { }

  loginRequest(username: string, password: string){
    
    let reqObj = {
      "username": username,
      "password": password
    }

    return this.http.get<any>(environment.baseUrl + `/user/login`,{
      params: reqObj
    });
  
  }
}