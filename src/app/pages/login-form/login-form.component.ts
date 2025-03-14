import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  handleHome(){
    this.route.navigate([''])
  }
  handleRegistration(){
    this.route.navigate(['registration'])
  }
}
