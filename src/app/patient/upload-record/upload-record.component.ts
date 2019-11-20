import { PatientService } from './../../services/patient-service/patient.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-record',
  templateUrl: './upload-record.component.html',
  styleUrls: ['./upload-record.component.css']
})
export class UploadRecordComponent implements OnInit {
  selectedDocumentType: string = "Test Report";
  submitted: boolean = false;
  loading: boolean = false;
  fileChosen: File;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  uploadRecord(uploadRecordForm: NgForm) {
    this.submitted = true;
    this.loading = true;

    let formData = uploadRecordForm['form']['value'];

    this.patientService.uploadMedicalRecord(this.fileChosen, formData['documentType'], JSON.parse(localStorage.getItem('user'))['username']).subscribe(
      data => {
        this.loading = false;
        Swal.fire({
          title: 'Success',
          text: 'Medical Record uploaded successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          uploadRecordForm.reset();
          this.submitted = false;
        });
      },
      error => {
        console.log(error);
        this.loading = false;
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while uploading the record`,
          icon: 'error',
          confirmButtonText: 'Okay'
        }).then(() => {
          this.submitted = false;
        });
      }
    );
  }

  changeFile(fileChosen: FileList) {
    this.fileChosen = fileChosen.item(0);
    console.log(this.fileChosen);
  }

}
