import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {

  videos: any
  videoByCourse: any
  courses: any
  courseName: any
  videosByCourseCount: any
  constructor(private as: AdminService,private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.as.getCourses()
    .subscribe((data) => {
      this.courses = data
      console.log(this.courses);

      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });

    this.getLocalVideos();

  }

  getVideosByCourse(uniqueCourse: any){
    console.log(uniqueCourse);
   this.videoByCourse=this.videos.filter((x:any)=>{return x.course==uniqueCourse});
   console.log(this.videoByCourse);

   this.videosByCourseCount = this.videoByCourse.length
   if(this.videoByCourse.length == 0){
     this.courseName = "No videos in given course"
   }
   this.courseName = this.videoByCourse[0].course
   
       }

       editVideo(id:any){
        console.log(id)
        
        return this.router.navigate(['/edit-video/',id])
        
      }
    
      deleteVideo(id: number){
        let dialogref=  this.dialog.open(DialogBoxComponent, {
          width: '250px',
          data: {id:id}
        });
        dialogref.afterClosed().subscribe((result: boolean | null | undefined)=>{
          if(result!=undefined && result!=null && result==true)
          {
         this.as.deleteVideo(id).subscribe((data)=> 
         {
           console.log("successfully deleted...");
           this.getLocalVideos();
           this.router.navigate(['/videos'])
           
         }
         )

        }
      })
        
      }
  getLocalVideos(){
    this.as.getVideos()
        .subscribe((data)=>{
       
          
          this.videos=data;
          this.videoByCourse=this.videos;
          console.log(this.videos);
           console.log("glfsdfg");
          
        },
        (err)=>{
          console.log('Error is:',err);
          
        });
  }

  
}
