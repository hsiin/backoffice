import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

import { AjoutFourniComponent } from "./ajout-fourni/ajout-fourni.component";
import { ModifierFourniComponent } from "./modifier-fourni/modifier-fourni.component";




@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  data: Array<any>
  constructor(public dialog: MatDialog) { 
    this.data=[
      {ref:'1',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'2',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'3',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'4',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'5',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'6',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'7',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'8',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'9',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'10',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'11',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'12',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'13',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'14',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
      {ref:'15',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',url:'http://zid.tn/'},
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
  
    supp(fourni) {
  
      this.data = this.data.filter(
        item => item.ref != fourni.ref
      )
      // this.data.splice(index, 1);
  
    }


  //
  openUpdate(){
    this.dialog.open(ModifierFourniComponent)
  }

  openAjout(){
    this.dialog.open(AjoutFourniComponent);
  }




}
