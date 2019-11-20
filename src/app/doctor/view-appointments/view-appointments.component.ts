import { DoctorService } from './../../services/doctor-service/doctor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements OnInit {
  bookedAppointments: any[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getAppointmentsByDoctorUsername(JSON.parse(localStorage.getItem('user'))['username']).subscribe(
      data => {
        this.bookedAppointments = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
