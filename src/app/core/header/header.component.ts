import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 //creazione variabili route di tipo Router da utilizzare on clik in htnl

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    this.route.navigate(['login'])
  }
  handleRegistration(){
    this.route.navigate(['registration'])
  }
}
