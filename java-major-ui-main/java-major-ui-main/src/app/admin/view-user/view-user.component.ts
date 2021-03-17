import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  users: any
  //search=""
  searchInput!: string
  userBySearch: any;
  constructor(private as: AdminService, private router: Router) { }

  ngOnInit(): void {

    this.as.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
      this.userBySearch = this.users;

    },
      (err) => {
        console.log('Error is:', err);

      })

  }



  getUser(event: any) {
    console.log(event);
    this.userBySearch = this.users.filter((x: any) => { return x.users == event });
    console.log(this.userBySearch);


  }

  searchUsers(uname: String) {
    console.log(uname);

  
      this.userBySearch = this.users.filter((user: any) => user.username.toLowerCase().includes(uname));
    
  }
}
