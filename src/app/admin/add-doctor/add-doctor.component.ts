import { AdminService } from './../../services/admin-service/admin.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
  addDoctor(addDoctorForm: NgForm){
    this.submitted = true;
    this.loading = true;
    let formData = addDoctorForm['form']['value'];

    this.adminService.addDoctor(formData['name'], formData['specialization'], formData['designation'], formData['consultationFee'], formData['username'], formData['password']).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Doctor added successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          addDoctorForm.reset();
          this.submitted = false;
        });            
      },
      error => {
        this.loading = false;
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while adding the Doctor`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    );


  }


}
