import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { AjouterPubComponent } from "./ajouter-pub/ajouter-pub.component";
import { ModifierPubComponent } from "./modifier-pub/modifier-pub.component";

@Component({
  selector: 'app-publicites',
  templateUrl: './publicites.component.html',
  styleUrls: ['./publicites.component.css']
})
export class PublicitesComponent implements OnInit {
  data: Array<any>
  constructor( public dialog : MatDialog ) {
    this.data=[
      {ref:'1',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'2',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'3',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'4',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'5',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'6',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'7',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},
      {ref:'8',image:'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png',date:'02/09/2021',nom:'Hassine Bahri',dateD:'11/04/2021',dateF:'12/09/2021',url:'http://zid.tn/'},


    ];

   }

  ngOnInit(): void {
  }

  openAjout(){
    this.dialog.open(AjouterPubComponent)
  }

  openUpdate(){
    this.dialog.open(ModifierPubComponent)
  }

   //DELETE
   delete(pub){
    Swal.fire({
      title: 'êtes-vous sûr?',
      text: "Supprimer Publicité ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Annuler' ,
      confirmButtonText: 'Oui'
    }).then((result) => {
      if (result.isConfirmed) {
        this.supp(pub),
        Swal.fire(
          'Supprimée!',
          'Le Publicité a été supprimé ',
          'success'
        )
      }
    })
  }

  supp(pub) {

    this.data = this.data.filter(
      item => item.ref != pub.ref
    )
    // this.data.splice(index, 1);

  }

}
