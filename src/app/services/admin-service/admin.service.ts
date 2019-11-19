import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addAdmin(username: string, password: string){
    let reqObj = {
      'username': username,
      'password': password,
      'userType': 'admin'
    };

    return this.http.post<any>(environment.baseUrl + `/user`, reqObj);
  }

  addDoctor(name: string, specialization: string, designation: string, consultationFee: number, username: string, password: string){
    let reqObj = {
      'name': name,
      'specialization': specialization,
      'designation': designation,
      'consultationFee': consultationFee,
      'username': username,
      'password': password
    };

    return this.http.post<any>(environment.baseUrl + `/doctor`, reqObj);
  }

  addPatient(name: string, contactNumber: string, address: string, username: string, password: string){
    let reqObj = {
      'name': name,
      'contactNo': contactNumber,
      'address': address,
      'username': username,
      'password': password
    };

    return this.http.post<any>(environment.baseUrl + `/patient`, reqObj);
  }

  addBranch(code: string, name: string, address: string){
    let reqObj = {
      'code': code,
      'name': name,
      'address': address
    };

    return this.http.post<any>(environment.baseUrl + `/branch`, reqObj);
  }

  getRequestedAppointments(){
    return this.http.get<any>(environment.baseUrl + `/appointment/requested`);
  }

  updateAppointmentDetails(updatedObj: any){
    return this.http.put<any>(environment.baseUrl + `/appointment`, updatedObj);
  }

}
