import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {



  categories: any
 categoryById:any
  search=""
  constructor(private as: AdminService,private router: Router,public dialog: MatDialog) { 
  }
  
  
  ngOnInit(): void {

    this.getLocalCategories()

    
        
  }


  editCategory(id:any){
    console.log(id)
    
    return this.router.navigate(['/edit-category/',id])
    
  }

  deleteCategory(id:number){

    let dialogref=  this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: {id:id}
    });
    dialogref.afterClosed().subscribe((result)=>{
      if(result!=undefined && result!=null && result==true)
      {
        this.as.deleteCategory(id).subscribe((data)=>
        {
          console.log("SUCCESSFULLY DELETED!!!");
    
          this.getLocalCategories()
          
          this.router.navigate(['/categories'])
    
        })
      }
    })
   
  }

  getLocalCategories(){
    this.as.getCategories()
    .subscribe((data)=>{
      
      
      this.categories=data;
      console.log(this.categories);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });
  }
}
