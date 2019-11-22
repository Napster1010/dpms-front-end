import { DoctorService } from './../../services/doctor-service/doctor.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-view-medical-record',
  templateUrl: './view-medical-record.component.html',
  styleUrls: ['./view-medical-record.component.css']
})
export class ViewMedicalRecordComponent implements OnInit {
  patientDocumentDetails: any[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getPatientDocumentByDoctorUsername(JSON.parse(localStorage.getItem('user'))['username']).subscribe(
      data => {
        this.patientDocumentDetails = data;        
      },
      error => {
        console.log(error);
      }
    );
  }

  downloadFile(documentId: string){
    this.doctorService.downloadPatientMedicalRecord(documentId).subscribe(
      data => {
          console.log(data.text());
          let record: any = new Blob([data], {type: 'application/pdf'});

          var date = new Date();
          let filename: string = JSON.parse(localStorage.getItem('user'))['username'] + '_' + date.getDate() + '_' + date.getMonth() + '_' + date.getFullYear() + '_' + date.getHours() + ':' + date.getMinutes() + ':' +date.getSeconds();
          saveAs(record, filename);
          
        Swal.fire({
          title: 'Success',
          text: 'File Downloaded successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        );            
      },
      error => {
        console.log(error);
        Swal.fire({
          title: `Server error`,
          text: `Couldn't download the file`,
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    );
  }

}
