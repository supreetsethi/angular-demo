import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  //lstUser: Array<any>;

  lstUser: Array<any> = [
    { 'Name': 'Supreet', 'DOB': '21/05/1986', 'Gender': 'M' },
    { 'Name': 'Maninder', 'DOB': '01/08/1990', 'Gender': 'F' },
    { 'Name': 'Anandit', 'DOB': '24/03/2017', 'Gender': 'M' },
    { 'Name': 'Aadvik', 'DOB': '05/10/2012', 'Gender': 'M' },
  ];

  // lstContacts: Array<any> = [
  //   {
  //     "firstName": "Akira",
  //     "lastName": "Laine",
  //     "number": "0543236543",
  //     "likes": ["Pizza", "Coding", "Brownie Points"]
  //   },
  //   {
  //     "firstName": "Harry",
  //     "lastName": "Potter",
  //     "number": "0994372684",
  //     "likes": ["Hogwarts", "Magic", "Hagrid"]
  //   },
  //   {
  //     "firstName": "Sherlock",
  //     "lastName": "Holmes",
  //     "number": "0487345643",
  //     "likes": ["Intriguing Cases", "Violin"]
  //   },
  //   {
  //     "firstName": "Kristian",
  //     "lastName": "Vos",
  //     "number": "unknown",
  //     "likes": ["Javascript", "Gaming", "Foxes"]
  //   }
  // ];
  constructor(private _httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getAllPhotos(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/photos')
  }
  // getAllContacts() {
  //   return this.lstContacts;
  // }

  userName = new BehaviorSubject<any>('Supreet');
}
