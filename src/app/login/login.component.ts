import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../models/Users';
import { AuthenticationService } from 'src/services/authentication.service';
import { AppService } from 'src/services/app.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('myForm', { static: false }) myForm: NgForm;

  private user = new Users();

  constructor(private auth: AuthenticationService, private router: Router) {

  }

  onFormSubmit() {
    debugger
    this.auth.getJSON().subscribe((users: Users[]) => {
      debugger
      this.auth.user = users.find(x => x.email == this.user.email && x.password == this.user.password);
      if (this.auth.user != null) {
        if (this.auth.user.role == 'User')
          this.router.navigateByUrl('web/home');
        if (this.auth.user.role == 'Admin')
          this.router.navigateByUrl('admin/home');
      }
    });

  }


}
