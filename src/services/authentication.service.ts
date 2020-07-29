import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _usersJsonURL = 'assets/appUsers.json';

  user: Users;

  constructor(private http: HttpClient) { }

  getJSON():Observable<Users[]> {
    return this.http.get<Users[]>(this._usersJsonURL);
  }

}
