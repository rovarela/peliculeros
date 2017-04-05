import { Component, OnInit } from '@angular/core';

import { SecurityService } from './../security.service';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/**
 * Ask user for credentials
 * Send to a service and logs in the user
 * */
export class LoginComponent implements OnInit {
  /**
   * Some questions to indentify the user
   */
  private credentials = {
    email: '',
    password: ''
  };

  constructor(private securityService: SecurityService) { }

  ngOnInit() {
  }
  /**
   * the user clicks the register in button
   */
  alRegistrar() {
    this.securityService.postUser$(this.credentials).subscribe();
  }
  /**
   * the user clicks the log in button
   */
  alEntrar() {
    this.securityService.postSesion$(this.credentials).subscribe();
  }

  showError(control) {
    return control.errors && (control.dirty || control.touched)
  }
}
