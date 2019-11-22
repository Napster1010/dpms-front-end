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
    return this.http.get<any>(environment.baseUrl + `/appointment/doctor`, {
      params: {
        'doctorUsername': doctorUsername
      }
    });
    
  }

  getPatientDocumentByDoctorUsername(doctorUsername: string){
    return this.http.get<any>(environment.baseUrl + `/doctor/document/patient`, {
      params: {
        'doctorUsername': doctorUsername
      }
    });
  }

  downloadPatientMedicalRecord(documentId: string){    
    return this.http.get<any>(environment.baseUrl + `/document`, {
      params: {
        'id': documentId
      },
      'responseType': 'blob' as 'json'
    });
  }

  getAllAssociatedPatients(doctorUsername: string){
    return this.http.get<any>(environment.baseUrl + `/doctor/patient`, {
      params: {
        'doctorUsername': doctorUsername
      }
    });
  }

  uploadPrescription(prescription: string, doctorUsername: string, patientUsername: string){
    let reqObj = {
      'prescription': prescription,
      'doctorUsername': doctorUsername,
      'patientUsername': patientUsername
    };
    return this.http.post<any>(environment.baseUrl + `/doctor/prescription`, reqObj);
  }
}
