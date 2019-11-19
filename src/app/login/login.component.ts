import { Router } from '@angular/router';
import { AuthService } from './../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  login(loginForm: NgForm){
    let username: string = loginForm['form']['value']['username'];
    let password: string = loginForm['form']['value']['password'];

    this.authService.loginRequest(username, password).subscribe(
      data => {
        let user = {
          'id': data['id'],
          'username': data['username'],
          'userType': data['userType']
        }
        localStorage.setItem('user', JSON.stringify(user));
        
        if(user['userType']==='admin')
          this.router.navigate(['/admin/home']);
        else if(user['userType']==='doctor')
          this.router.navigate(['/doctor/home']);
        else
          this.router.navigate(['/patient/home']);
        
      },
      error=>{
        Swal.fire({
          title: `Invalid credentials`,
          text: `Wrong username or password entered`,
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    );

  }

}
