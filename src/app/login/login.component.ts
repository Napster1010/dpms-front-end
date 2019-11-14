import { Router } from '@angular/router';
import { AuthService } from './../services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
        console.log(data);
        alert('login successfull !!');

        let user = {
          'username': data['username'],
          'userType': data['userType']
        }
        localStorage.setItem('user', JSON.stringify(user));
        

        this.router.navigate(['/home']);
        


      },
      error=>{
        console.log(error);
        alert('wrong credentials');
      }
    );

  }

}
