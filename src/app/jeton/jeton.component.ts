import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AjouterJetonComponent } from "./ajouter-jeton/ajouter-jeton.component";
import { ModifierJetonComponent } from "./modifier-jeton/modifier-jeton.component";
import { DetailJetonComponent } from "./detail-jeton/detail-jeton.component";

@Component({
  selector: 'app-jeton',
  templateUrl: './jeton.component.html',
  styleUrls: ['./jeton.component.css']
})
export class JetonComponent implements OnInit {
  data : Array<any>
  constructor( public dialog : MatDialog) { 
    this.data=[ 
      {ref:'1',date:'02/09/2021', nom:'Pack 25 Clicks',desc:'Ce pack vous permet de disposer 25 clicks supllémentaires pour enchérir',valeur:'25d'},
      {ref:'2',date:'02/09/2021', nom:'Pack 20 Clicks',desc:'Ce pack vous permet de disposer 20 clicks supllémentaires pour enchérir',valeur:'20d'},
      {ref:'3',date:'02/09/2021', nom:'Pack 15 Clicks',desc:'Ce pack vous permet de disposer 15 clicks supllémentaires pour enchérir',valeur:'15d'},
      {ref:'4',date:'02/09/2021', nom:'Pack 10 Clicks',desc:'Ce pack vous permet de disposer 25 clicks supllémentaires pour enchérir',valeur:'10d'},
      {ref:'5',date:'02/09/2021', nom:'Pack 30 Clicks',desc:'Ce pack vous permet de disposer 30 clicks supllémentaires pour enchérir',valeur:'30d'},
      {ref:'6',date:'02/09/2021', nom:'Pack 35 Clicks',desc:'Ce pack vous permet de disposer 35 clicks supllémentaires pour enchérir',valeur:'35d'},

    ];
  }

  ngOnInit(): void {
  }

    //DELETE
    delete(ref){
      Swal.fire({
        title: 'êtes-vous sûr?',
        text: "Supprimer Jeton",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'Annuler' ,
        confirmButtonText: 'Oui'
      }).then((result) => {
        if (result.isConfirmed) {
          this.supp(ref),
          Swal.fire(
            'Supprimée!',
            'Le Jeton a été supprimé ',
            'success'
          )
        }
      })
    }
  
    supp(jet) {
  
      this.data = this.data.filter(
        item => item.ref != jet.ref
      )
      // this.data.splice(index, 1);
  
    }


    //
    openUpdate(){
      this.dialog.open(ModifierJetonComponent)
    }

    openAjout(){
      this.dialog.open(AjouterJetonComponent);
    }

    detail(){
      this.dialog.open(DetailJetonComponent)
    }

    

}
