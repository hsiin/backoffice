import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  data : Array<any>;
  constructor() { 

    this.data=[
      {ref:'1',date: '11/04/1998', nom:'cat'},
      {ref:'2',date: '11/04/1998',nom:'cat'},
      {ref:'3',date: '11/04/1998',nom:'cat'},
      {ref:'4',date: '11/04/1998',nom:'cat'},
      {ref:'5',date: '11/04/1998',nom:'cat'},
      {ref:'6',date: '11/04/1998',nom:'cat'},
      {ref:'7',date: '11/04/1998',nom:'cat'},
      {ref:'8',date: '11/04/1998',nom:'cat'},
      {ref:'9',date: '11/04/1998',nom:'cat'},
      {ref:'10',date: '11/04/1998',nom:'cat'},
      {ref:'11',date: '11/04/1998',nom:'cat'},
    ];

  }

  ngOnInit() {
    
  }

}
