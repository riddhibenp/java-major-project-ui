import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-locked-user-notification',
  templateUrl: './locked-user-notification.component.html',
  styleUrls: ['./locked-user-notification.component.scss']
})
export class LockedUserNotificationComponent implements OnInit {
  users: any

  searchInput!: string
  userBySearch: any;

  constructor(private as: AdminService, private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    
   this.getLocalUsers()
  }
  searchUsers(uname: String) {
    console.log(uname);

  
      this.userBySearch = this.users.filter((user: any) => user.username.toLowerCase().includes(uname));
    
  }


  unlockUser(id:number){
    // this.as.unlockUserById(this.users.value.userId).subscribe((data:any)=>{
       console.log(id);
      
    // });
    let dialogref=  this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: {id:id}
    });
    dialogref.afterClosed().subscribe((result)=>{
      if(result!=undefined && result!=null && result==true)
      {
        console.log(id);
        
  
        this.as.unlockUserById(id).subscribe((data:any)=>{
             console.log(data);
            this.getLocalUsers()
        }, (err)=>{
          console.log('Error is:',err);
          
        });
      }
  

    })
  }



  getLocalUsers(){
    this.as.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
      this.userBySearch = this.users;

    },
      (err) => {
        console.log('Error is:', err);

      })
  }


}
