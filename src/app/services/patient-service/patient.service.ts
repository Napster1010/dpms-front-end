import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  bookAppointment(patientUsername: string, doctorUsername: string, branchCode: string, dateOfAppointment: string){
    let reqObj = {
      'patientUsername': patientUsername,
      'doctorUsername': doctorUsername,
      'branchCode': branchCode,
      'dateOfAppointment': dateOfAppointment
    }

    return this.http.post<any>(environment.baseUrl + `/appointment`, reqObj);
  }
}
