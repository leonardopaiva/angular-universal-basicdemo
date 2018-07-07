import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  items: any[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.getItems();
    this.getUsers();
  }

  getItems() {
    return [
      {id: 1, name: 'Leonardo'},
      {id: 2, name: 'Maria'},
      {id: 3, name: 'Marta'},
      {id: 4, name: 'Jonas'},
      {id: 5, name: 'Yuri'}
    ];
  }

  getUsers() {
    const usersObservable = this.dataService.getUsers();
    usersObservable.subscribe(
      (data) => {
        // console.log(data);
        console.log('Data complete...');
        this.users = data;
      }
    );
  }

}
