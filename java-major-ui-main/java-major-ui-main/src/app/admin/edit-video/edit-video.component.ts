import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {

  id:any

  editVideoForm!: FormGroup;
  videoById:any
  video_name:any
  courses:any
 videos:any
 course_name: any
  url!: string | ArrayBuffer | null;
  path: any;
  abc: any;
  constructor(private as: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.id = this.route.snapshot.params['id']);

    this.as.getVideoById(this.id).subscribe((data)=>
    {
      this.as.getCourses().subscribe((data1)=>
      {
        this.courses=data1
       this.course_name= this.courses.filter((x:any)=>{return x.courseName == this.videoById.course})
       this.course_name = this.course_name[0].courseId
       console.log(this.course_name);
       
      },
      error => console.log(error));

      this.videoById=data;
      console.log(this.videoById.courseLogo);
      
      this.editVideoForm = new FormGroup({
        videoId: new FormControl(this.videoById.videoId),
        videoName: new FormControl(this.videoById.videoName),
       videoDesc: new FormControl(this.videoById.videoDesc),
      courseId: new FormControl({ value: this.videoById.course, disabled:true}),
      courseName: new FormControl(this.course_name),
        oldvideoPath:new FormControl({value:this.videoById.videoPath, disabled:true}),
       videoPath:new FormControl('',[Validators.required])
      })
      this.abc=this.videoById.videoPath
    },
    error => console.log(error));
  }



  updateVideo(){
    //remove fakepath from image url
    //ASSUMPTION: SELECT IMAGE FROM ASSETS ONLY!
    this.path=this.editVideoForm.value.videoPath
    this.editVideoForm.value.videoPath = this.path.replace(/^.*\\/, "../../../assets/")
    this.as.editVideo(this.editVideoForm.value.videoId,this.editVideoForm.value.videoName,this.editVideoForm.value.videoDesc,this.editVideoForm.value.videoPath,this.course_name).subscribe((data)=>{
      console.log("SUCCESSFULLY UPDATED!");
      this.as.getVideos().subscribe((data)=>{
        this.videos=data;
        console.log(this.videos);
        this.router.navigate(['/videos'])
        
      })
      
    },(err)=>{
      console.log('Error is:',err);}
    )
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
