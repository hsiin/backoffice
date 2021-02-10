import { Component, OnInit , Input , Inject } from '@angular/core';
import { MatDialogRef ,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ClientComponent } from "../client.component";

@Component({
  selector: 'app-detail-clinet',
  templateUrl: './detail-clinet.component.html',
  styleUrls: ['./detail-clinet.component.css']
})
export class DetailClinetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailClinetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: [{ name: string }, {re : String},{test : String}, {ench:Array<any>} , {email : String} , {image} ]
  ) { 
    
  }

  ngOnInit(): void {
  }

}
