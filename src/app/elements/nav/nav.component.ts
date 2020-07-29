import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private _navJsonURL = 'assets/appNav.json';
  private _navJsonAdminURL = "assets/appAdminNav.json";
  navItems: any

  constructor(private http: HttpClient, private auth: AuthenticationService) {

    this.getJSON().subscribe(data => {
      this.navItems = data;
    });

    console.log('Nav Module Loaded')
  }

  getJSON(): Observable<any> {
    debugger
    var url = this.auth.user.role == "Admin" ? this._navJsonAdminURL : this._navJsonURL;
    return this.http.get(url);
  }

  ngOnInit() {
  }

}
