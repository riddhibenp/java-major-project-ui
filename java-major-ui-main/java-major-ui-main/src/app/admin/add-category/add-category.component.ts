import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  path!: any
  categoryForm!: FormGroup;
 url:any
  constructor(private as:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(),
     categoryDesc: new FormControl(),
     categoryLogo:new FormControl(),
    })
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


  addCategory(){
    console.log(this.categoryForm.value)
    //remove fakepath from image url
    //ASSUMPTION: SELECT IMAGE FROM ASSETS ONLY!
    this.path=this.categoryForm.value.categoryLogo
    this.categoryForm.value.categoryLogo = this.path.replace(/^.*\\/, "../../../assets/")
    // console.log( this.categoryForm.value.categoryLogo)
    this.as.addCategory(this.categoryForm.value.categoryName, this.categoryForm.value.categoryDesc,this.categoryForm.value.categoryLogo).subscribe((data)=>{
    this.router.navigate(['/categories'])

    })
  }
}
