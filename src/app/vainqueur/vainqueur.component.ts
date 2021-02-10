import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

import { AjoutVainqueurComponent } from "./ajout-vainqueur/ajout-vainqueur.component";

@Component({
  selector: 'app-vainqueur',
  templateUrl: './vainqueur.component.html',
  styleUrls: ['./vainqueur.component.css']
})
export class VainqueurComponent implements OnInit {

  constructor( public dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openAjout(){
    this.dialog.open(AjoutVainqueurComponent)
  }

}
