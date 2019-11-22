import { CheckAppointmentStatusComponent } from './patient/check-appointment-status/check-appointment-status.component';
import { ViewMedicalRecordComponent } from './doctor/view-medical-record/view-medical-record.component';
import { ViewAppointmentsComponent } from './doctor/view-appointments/view-appointments.component';
import { AddBranchComponent } from './admin/add-branch/add-branch.component';
import { UploadPrescriptionComponent } from './doctor/upload-prescription/upload-prescription.component';
import { ViewPrescriptionsComponent } from './patient/view-prescriptions/view-prescriptions.component';
import { DoctorHomepageComponent } from './doctor/doctor-homepage/doctor-homepage.component';
import { UploadRecordComponent } from './patient/upload-record/upload-record.component';
import { BookAppointmentComponent } from './patient/book-appointment/book-appointment.component';
import { PatientHomepageComponent } from './patient/patient-homepage/patient-homepage.component';
import { ManageAppointmentComponent } from './admin/manage-appointment/manage-appointment.component';
import { AddPatientComponent } from './admin/add-patient/add-patient.component';
import { AddDoctorComponent } from './admin/add-doctor/add-doctor.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminHomepageComponent } from './admin/admin-homepage/admin-homepage.component';
import { DoctorHomeComponent } from './doctor/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminHomeComponent, children: [
    {path: 'home', component: AdminHomepageComponent},
    {path: 'add-admin', component: AddAdminComponent},
    {path: 'add-doctor', component: AddDoctorComponent},
    {path: 'add-patient', component: AddPatientComponent},
    {path: 'manage-appointment', component: ManageAppointmentComponent},
    {path: 'add-branch', component: AddBranchComponent}
  ]},
  {path: 'patient', component: PatientHomeComponent, children: [
    {path: 'home', component: PatientHomepageComponent},
    {path: 'book-appointment', component: BookAppointmentComponent},
    {path: 'view-prescriptions', component: ViewPrescriptionsComponent},
    {path: 'upload-medical-record', component: UploadRecordComponent},
    {path: 'appointment-status', component: CheckAppointmentStatusComponent}    
  ]},
  {path: 'doctor', component: DoctorHomeComponent, children: [
    {path: 'home', component: DoctorHomepageComponent},
    {path: 'view-appointments', component: ViewAppointmentsComponent},
    {path: 'upload-prescription', component: UploadPrescriptionComponent},
    {path: 'view-medical-record', component: ViewMedicalRecordComponent}
  ]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
