import { NgForm } from '@angular/forms';
import { AdminService } from './../../services/admin-service/admin.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addPatient(addPatientForm: NgForm){
    this.submitted = true;
    this.loading = true;
    let formData = addPatientForm['form']['value'];

    this.adminService.addPatient(formData['name'], formData['contactNo'], formData['address'], formData['username'], formData['password']).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Patient added successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          addPatientForm.reset();
          this.submitted = false;
        });            
      },
      error => {
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while adding the Patient`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    );
  }
}
