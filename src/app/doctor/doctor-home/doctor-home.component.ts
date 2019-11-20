import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  username: string;
  currentLink: number;

  constructor(private router: Router) {
    this.username = JSON.parse(localStorage.getItem('user'))['username'];
  }

  ngOnInit() {
  }

  linkChange(newVal: number){
    this.currentLink = newVal;
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
