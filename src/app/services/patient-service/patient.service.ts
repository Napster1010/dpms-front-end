import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  uploadMedicalRecord(document: File, documentType: string, patientUserName: string, doctorUsername: string){
    let body = new FormData();
    body.append('document', document);
    body.append('documentType', documentType);
    body.append('patientUsername', patientUserName);
    body.append('doctorUsername', doctorUsername);

    return this.http.post<any>(environment.baseUrl + `/document`, body);
  }

  getAllAssociatedDoctors(patientUsername: string){
    return this.http.get<any>(environment.baseUrl + `/patient/doctor`, {
      params: {
        'patientUsername': patientUsername
      }
    });
  }

  getAppointmentDetails(patientUsername: string){
    return this.http.get<any>(environment.baseUrl + `/appointment/patient`, {
      params: {
        'patientUsername': patientUsername
      }
    });
  }

  getUploadedPrescriptions(patientUsername: string){
    return this.http.get<any>(environment.baseUrl + `/patient/prescription`, {
      params: {
        'patientUsername': patientUsername
      }
    });
  }
}
