import { Component, Renderer2, ElementRef, OnInit,ViewChild, AfterViewInit, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router, ActivatedRoute } from '@angular/router';




@Directive({selector: 'HTMLElement'})
class HTMLElement {
}

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  
 
  id:any
  courseById:any
  editCourseForm!: FormGroup;
  categoryById:any
  cat_name:any
  categories:any
  courses:any
  abc:any
  url!: string | ArrayBuffer | null;
  path: any;
 
  constructor(private as: AdminService, private router:Router,private route:ActivatedRoute,private renderer : Renderer2 ) { }

  ngOnInit(): void {
    console.log(this.id = this.route.snapshot.params['id']);
   
    this.as.getCourseById(this.id).subscribe((data)=>
    {
      this.as.getCategories().subscribe((data1)=>
      {
        this.categories=data1
       this.cat_name= this.categories.filter((x:any)=>{return x.categoryName == this.courseById.category})
       this.cat_name = this.cat_name[0].categoryId
      },
      error => console.log(error));

      this.courseById=data;
      console.log(this.courseById.courseLogo);
      
      this.editCourseForm = new FormGroup({
        courseId: new FormControl(this.courseById.courseId),
        courseName: new FormControl(this.courseById.courseName),
       courseDesc: new FormControl(this.courseById.courseDesc),
       coursePrice: new FormControl(this.courseById.coursePrice),
       likes: new FormControl(this.courseById.likes),
      categoryId: new FormControl({ value: this.courseById.category, disabled:true}),
      categoryName: new FormControl(this.cat_name),
        oldcourseLogo:new FormControl({value:this.courseById.courseLogo, disabled:true}),
       courseLogo:new FormControl('',[Validators.required])
      })

      this.abc=this.courseById.courseLogo
   
    },
    error => console.log(error));
  }
  // @ViewChild('demo')
  // myElement!: HTMLElement;
  // logoUpdate(event: any){
  //   console.log("hello");
    
  //   // @ViewChild('demo') myElement: HTMLElement
    
  //   this.abc=document.querySelector('#demo')
  //   this.abc.setStyle({"color":"red"})
  //   //alert(this.abc)
  // }

  // ngAfterViewInit(): void {
  //   // this.renderer.setStyle(this.myElement, "color", "red");
  //   // alert(this.myElement)
    
  //   // this.myElement.setAttribute("color","red")
  // }






  updateCourse(){
    //remove fakepath from image url
    //ASSUMPTION: SELECT IMAGE FROM ASSETS ONLY!
    this.path=this.editCourseForm.value.courseLogo
    this.editCourseForm.value.courseLogo = this.path.replace(/^.*\\/, "../../../assets/")
    this.as.editCourse(this.editCourseForm.value.courseId,this.editCourseForm.value.courseName,this.editCourseForm.value.courseDesc,this.editCourseForm.value.courseLogo,this.editCourseForm.value.coursePrice,this.editCourseForm.value.likes,this.cat_name).subscribe((data)=>{
      console.log("Successfully Updated!");

      this.as.getCourses().subscribe((data)=>{
        this.courses=data;
        console.log(this.courses);
        this.router.navigate(['/courses'])
        
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
