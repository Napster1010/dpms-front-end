import { AdminService } from './../../services/admin-service/admin.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addBranch(addBranchForm: NgForm){
    this.submitted = true;
    this.loading = true;
    let formData = addBranchForm['form']['value'];

    this.adminService.addBranch(formData['code'], formData['name'], formData['address']).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Branch added successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          addBranchForm.reset();
          this.submitted = false;
        });            
      },
      error => {
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while adding the Branch`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    );
  }
}
