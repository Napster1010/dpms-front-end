import { AdminService } from './../../services/admin-service/admin.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent implements OnInit {
  pendingAppointments: any[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getRequestedAppointments().subscribe(
      data => {
        console.log(data);
        this.pendingAppointments = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  approveAppointment(appointment: any){
    appointment['status'] = 'BOOKED';
    this.adminService.updateAppointmentDetails(appointment).subscribe(
      data => {
        Swal.fire({
          title: 'Success',
          text: 'Appointment booked successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          const index = this.pendingAppointments.indexOf(appointment, 0);
          this.pendingAppointments.splice(index, 1);
        });                    
      },
      error => {
        console.log(error);
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while approving the appointment`,
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    );
  }

  rejectAppointment(appointment: any){
    appointment['status'] = 'REJECTED';    
    this.adminService.updateAppointmentDetails(appointment).subscribe(
      data => {
        Swal.fire({
          title: 'Success',
          text: 'Appointment rejected successfully',
          icon: 'success',
          confirmButtonText: 'Okay'
        }
        ).then(() => {
          const index = this.pendingAppointments.indexOf(appointment, 0);
          this.pendingAppointments.splice(index, 1);
        });                    
      },
      error => {
        console.log(error);
        Swal.fire({
          title: `Server error`,
          text: `Some error occurred while rejecting the appointment`,
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    );
  }

}
