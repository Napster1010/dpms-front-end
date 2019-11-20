import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getAllDoctors(){
    return this.http.get<any>(environment.baseUrl + `/doctor`);
  }

  getAppointmentsByDoctorUsername(doctorUsername: string){
    return this.http.get<any>(environment.baseUrl + `/appointment`, {
      params: {
        'doctorUsername': doctorUsername
      }
    });
    
  }
}
