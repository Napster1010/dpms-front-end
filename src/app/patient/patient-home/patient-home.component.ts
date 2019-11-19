import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
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
