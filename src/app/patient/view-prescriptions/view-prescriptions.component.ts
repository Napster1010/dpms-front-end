import { PatientService } from './../../services/patient-service/patient.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-prescriptions',
  templateUrl: './view-prescriptions.component.html',
  styleUrls: ['./view-prescriptions.component.css']
})
export class ViewPrescriptionsComponent implements OnInit {
  uploadedPrescriptions: any[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getUploadedPrescriptions(JSON.parse(localStorage.getItem('user'))['username']).subscribe(
      data => {
        console.log(data);
        this.uploadedPrescriptions = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  viewPrescription(id: number){
    for(let index=0 ; index<this.uploadedPrescriptions.length; index++){
      if(id==this.uploadedPrescriptions[index]['id']){
        Swal.fire({
          title: 'Your Prescription',
          text: this.uploadedPrescriptions[index]['prescription'],
          icon: 'info',
          confirmButtonText: 'Okay'
        }
        );                            
      }
    }
  }
}
