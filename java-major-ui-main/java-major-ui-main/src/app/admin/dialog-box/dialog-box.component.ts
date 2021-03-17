import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogBoxComponent>
    ) { }

  ngOnInit(): void {
  }


  deleteDialog(){
    this.dialogRef.close(true);
     
  }

}
