import { NgForm } from '@angular/forms';
import { DoctorService } from './../../services/doctor-service/doctor.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-prescription',
  templateUrl: './upload-prescription.component.html',
  styleUrls: ['./upload-prescription.component.css']
})
export class UploadPrescriptionComponent implements OnInit {
  associatedPatients: any[] = [];
  selectedPatient: string;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getAllAssociatedPatients(JSON.parse(localStorage.getItem('user'))['username']).subscribe(
      data => {
        this.associatedPatients = data;
        this.selectedPatient = this.associatedPatients[0]['user']['username'];
      },
      error => {
        console.log(error);
      }
    );
  }

  uploadPrescription(uploadPrescriptionForm: NgForm){
    this.submitted = true;
    this.loading = true;
    let formData = uploadPrescriptionForm['form']['value'];
    
    this.doctorService.uploadPrescription(formData['prescription'], JSON.parse(localStorage.getItem('user'))['username'], formData['intendedPatient']).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Prescription uploaded successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          uploadPrescriptionForm.reset();
          this.submitted = false;
        });            
      },
      error => {
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while uploading prescription`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    );
  }

}
