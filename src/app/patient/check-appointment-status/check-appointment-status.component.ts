import { PatientService } from './../../services/patient-service/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-appointment-status',
  templateUrl: './check-appointment-status.component.html',
  styleUrls: ['./check-appointment-status.component.css']
})
export class CheckAppointmentStatusComponent implements OnInit {
  appointmentDetails: any[];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getAppointmentDetails(JSON.parse(localStorage.getItem('user'))['username']).subscribe(
      data => {
        console.log(data);
        this.appointmentDetails = data;        
      },
      error => {
        console.log(error);
      }
    );
  }

}
