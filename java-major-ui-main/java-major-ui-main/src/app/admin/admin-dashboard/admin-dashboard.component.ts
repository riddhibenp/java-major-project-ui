import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  categories: any
  courses: any
  total_cat:any
  total_cou:any
  total_user:any

  constructor(private as: AdminService) { 
  }
  
  
  ngOnInit(): void {

    this.as.getCategories()
    .subscribe((data)=>{
      
      
      this.categories=data;
      console.log(this.categories);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });


    this.as.getCourses()
    .subscribe((data)=>{
   
      
      this.courses=data;
      console.log(this.courses);
      
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });



    //count of categories  
    this.as.getCategoriesCount()
    .subscribe((data)=>{
      
      
      this.total_cat=data;
      console.log(this.total_cat);
     
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });

    
    //count of courses
    this.as.getCourseCount()
    .subscribe((data)=>{
      
      
      this.total_cou=data;
      console.log(this.total_cou);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });



    //count of users
    this.as.getUserCount()
    .subscribe((data)=>{
      
      
      this.total_user=data;
      console.log(this.total_user);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });
    
  
  

    
  }

}
