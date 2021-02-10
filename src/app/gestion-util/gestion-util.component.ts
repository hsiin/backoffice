import { Component, OnInit } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";
import Swal from 'sweetalert2';

import { AjoutUtilComponent } from "./ajout-util/ajout-util.component";
import { ModifierUtilComponent } from "./modifier-util/modifier-util.component";

@Component({
  selector: 'app-gestion-util',
  templateUrl: './gestion-util.component.html',
  styleUrls: ['./gestion-util.component.css']
})
export class GestionUtilComponent implements OnInit {
 data: Array<any>
  constructor( public dialog : MatDialog ) { 
    this.data=[
      { ref:'1', name:'Hassine Bahri', email:'hassinebahri@gmail.com' },
      { ref:'2', name:'Foulen Bahri', email:'hassinebahri@gmail.com' },
      { ref:'3', name:'User user', email:'hassinebahri@gmail.com' },
      { ref:'4', name:'Bruh bro', email:'hassinebahri@gmail.com' },
      { ref:'5', name:'Bi Bim', email:'hassinebahri@gmail.com' },
      { ref:'6', name:'Ali Bahri', email:'hassinebahri@gmail.com' },
      { ref:'4', name:'kaskrout Kafteji', email:'hassinebahri@gmail.com' },

    ];
  }

  ngOnInit(): void {
  }

  openAjout(){
    this.dialog.open(AjoutUtilComponent)
  }

  openUpdate(){
    this.dialog.open(ModifierUtilComponent)
  }


    //DELETE
    delete(ref){
      Swal.fire({
        title: 'êtes-vous sûr?',
        text: "Supprimer Utilisateur",
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
            'Le Utilisateur a été supprimé ',
            'success'
          )
        }
      })
    }
  
    supp(user) {
  
      this.data = this.data.filter(
        item => item.ref != user.ref
      )
      // this.data.splice(index, 1);
  
    }


}
