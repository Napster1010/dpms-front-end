import { PatientService } from './../../services/patient-service/patient.service';
import { NgForm } from '@angular/forms';
import { DoctorService } from './../../services/doctor-service/doctor.service';
import { BranchService } from './../../services/branch-service/branch.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  branches: any[];
  doctors: any[];
  selectedBranch: string;
  selectedDoctor: string;
  submitted: boolean;
  loading: boolean;

  constructor(private branchService: BranchService,
    private doctorService: DoctorService,
    private patientService: PatientService) { }

  ngOnInit() {
    this.branchService.getAllBranches().subscribe(
      data => {
        this.branches = data;
        this.selectedBranch = this.branches[0]['code'];
      },
      error => {
        console.log(error);
      }
    );

    this.doctorService.getAllDoctors().subscribe(
      data => {
        this.doctors = data;
        this.selectedDoctor = this.doctors[0]['user']['username'];
      },
      error => {
        console.log(error);
      }
    );
  }

  bookAppointment(bookAppointmentForm: NgForm){
    this.submitted = true;
    this.loading = true;
    let formData = bookAppointmentForm['form']['value'];
    let appointmentDate: string = formData['appointmentDate']['year'] + '-' + formData['appointmentDate']['month'] + '-' + formData['appointmentDate']['day'];        
    this.patientService.bookAppointment(JSON.parse(localStorage.getItem('user'))['username'], formData['doctor'], formData['branch'],  appointmentDate).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Appointment requested successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          bookAppointmentForm.reset();
          this.submitted = false;
        });            
      },
      error => {
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while booking the appointment`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    );
  }
}
