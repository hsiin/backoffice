import { Component, OnInit } from '@angular/core';
import { AjoutNewsletterComponent } from "./ajout-newsletter/ajout-newsletter.component";
import { ModifNewsletterComponent } from "./modif-newsletter/modif-newsletter.component";

import { MatDialog } from "@angular/material/dialog";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  data: Array<any>
  constructor( public dialog : MatDialog ) {
    this.data=[
      {ref:'1', image:'http://www.favorisxp.com/fonds-decran/paysages/paysage-fond-ecran-montagne-soleil-violet-wallpaper-favorisxp.jpg', date:'11/04/2021',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse mollitia quas enim nobis maiores, sapiente amet consectetur necessitatibus. Recusandae alias velit ducimus optio quo animi delectus repellendus aut voluptates!'},
      {ref:'2', image:'http://www.favorisxp.com/fonds-decran/paysages/paysage-fond-ecran-montagne-soleil-violet-wallpaper-favorisxp.jpg', date:'11/04/2021',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse mollitia quas enim nobis maiores, sapiente amet consectetur necessitatibus. Recusandae alias velit ducimus optio quo animi delectus repellendus aut voluptates!'},
      {ref:'3', image:'http://www.favorisxp.com/fonds-decran/paysages/paysage-fond-ecran-montagne-soleil-violet-wallpaper-favorisxp.jpg', date:'11/04/2021',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse mollitia quas enim nobis maiores, sapiente amet consectetur necessitatibus. Recusandae alias velit ducimus optio quo animi delectus repellendus aut voluptates!'},
      {ref:'4', image:'http://www.favorisxp.com/fonds-decran/paysages/paysage-fond-ecran-montagne-soleil-violet-wallpaper-favorisxp.jpg', date:'11/04/2021',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse mollitia quas enim nobis maiores, sapiente amet consectetur necessitatibus. Recusandae alias velit ducimus optio quo animi delectus repellendus aut voluptates!'},
      {ref:'5', image:'http://www.favorisxp.com/fonds-decran/paysages/paysage-fond-ecran-montagne-soleil-violet-wallpaper-favorisxp.jpg', date:'11/04/2021',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse mollitia quas enim nobis maiores, sapiente amet consectetur necessitatibus. Recusandae alias velit ducimus optio quo animi delectus repellendus aut voluptates!'},
      {ref:'6', image:'http://www.favorisxp.com/fonds-decran/paysages/paysage-fond-ecran-montagne-soleil-violet-wallpaper-favorisxp.jpg', date:'11/04/2021',desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea esse mollitia quas enim nobis maiores, sapiente amet consectetur necessitatibus. Recusandae alias velit ducimus optio quo animi delectus repellendus aut voluptates!'},

    ]
   }

  ngOnInit(): void {
  }

  openAjout(){
    this.dialog.open(AjoutNewsletterComponent)
  }

  openUpdate(){
    this.dialog.open(ModifNewsletterComponent)
  }


      //DELETE
      delete(ref){
        Swal.fire({
          title: 'êtes-vous sûr?',
          text: "Supprimer News Letter",
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
              'News Letter a été supprimé ',
              'success'
            )
          }
        })
      }
    
      supp(news) {
    
        this.data = this.data.filter(
          item => item.ref != news.ref
        )
        // this.data.splice(index, 1);
    
      }

}

