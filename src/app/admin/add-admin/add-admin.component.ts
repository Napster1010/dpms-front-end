import { AdminService } from './../../services/admin-service/admin.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addAdmin(adminForm: NgForm) {
    this.submitted = true;
    this.loading = true;
    let formData = adminForm['form']['value'];
    
    this.adminService.addAdmin(formData['username'], formData['password']).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Admin added successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          adminForm.reset();
          this.submitted = false;
        });    
      },
      error => {
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while adding the Admin`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    )
  }
}
