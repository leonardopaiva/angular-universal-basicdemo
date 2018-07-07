import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  data: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }

  getUsers() {
    console.log('getUsers called');
    return this.httpClient.get<any>('https://api.github.com/users', {
      observe: 'body',
      responseType: 'json'
    });
  }
}
