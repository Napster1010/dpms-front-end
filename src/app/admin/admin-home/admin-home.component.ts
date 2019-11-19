import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
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
