import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AddDoctorComponent } from './admin/add-doctor/add-doctor.component';
import { AddPatientComponent } from './admin/add-patient/add-patient.component';
import { ManageAppointmentComponent } from './admin/manage-appointment/manage-appointment.component';
import { PatientHomepageComponent } from './patient/patient-homepage/patient-homepage.component';
import { BookAppointmentComponent } from './patient/book-appointment/book-appointment.component';
import { UploadRecordComponent } from './patient/upload-record/upload-record.component';
import { DoctorHomepageComponent } from './doctor/doctor-homepage/doctor-homepage.component';
import { UploadPrescriptionComponent } from './doctor/upload-prescription/upload-prescription.component';
import { ViewPrescriptionsComponent } from './patient/view-prescriptions/view-prescriptions.component';
import { AddBranchComponent } from './admin/add-branch/add-branch.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewAppointmentsComponent } from './doctor/view-appointments/view-appointments.component';
import { ViewMedicalRecordComponent } from './doctor/view-medical-record/view-medical-record.component';
import { CheckAppointmentStatusComponent } from './patient/check-appointment-status/check-appointment-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHomeComponent,
    PatientHomeComponent,
    DoctorHomeComponent,
    AdminHomepageComponent,
    AddAdminComponent,
    AddDoctorComponent,
    AddPatientComponent,
    ManageAppointmentComponent,
    PatientHomepageComponent,
    BookAppointmentComponent,
    UploadRecordComponent,
    DoctorHomepageComponent,
    UploadPrescriptionComponent,
    ViewPrescriptionsComponent,
    AddBranchComponent,
    ViewAppointmentsComponent,
    ViewMedicalRecordComponent,
    CheckAppointmentStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
