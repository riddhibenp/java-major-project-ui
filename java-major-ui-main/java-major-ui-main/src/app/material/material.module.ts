import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';



const materialComponents = [
  MatDialogModule]

@NgModule({
  declarations: [],
  imports: 
    [materialComponents],
  exports:
   [ materialComponents]
  
})
export class MaterialModule { }
