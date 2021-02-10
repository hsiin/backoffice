import { Component, OnInit } from '@angular/core';
import { DetailClinetComponent } from "./detail-clinet/detail-clinet.component";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  data: Array<any>;
  ench: Array<any>
  somme: number;
  constructor(public dialog: MatDialog) {
    this.ench = [
      { ref: '1', date: '02/10/2021', enchere: 'Phone', produit:'Samsung Galaxy s20', click: 10, encaissement: '30' },
      { ref: '2', date: '02/10/2021', enchere: 'Phone', produit:'Samsung Galaxy s20', click: 5, encaissement: '30' },
      { ref: '3', date: '02/10/2021', enchere: 'Phone', produit:'Samsung Galaxy s20', click: 8, encaissement: '30' }
    ];

    this.data = [
      { ench: this.ench, ref: '1', image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png', date: '02/09/2021', nom: 'Hassine Bahri', email: 'hassinebahri@gmail.com', solde: '15', phone: '999999999', adresse: 'XXXXXXXXXXXX' },
      { ench: this.ench, ref: '2', image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png', date: '02/09/2021', nom: 'User user', email: 'example@gmail.com', solde: '25', phone: '999999999', adresse: 'XXXXXXXXXXXX' },
      { ench: this.ench, ref: '3', image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png', date: '02/09/2021', nom: 'Foulen fouleni', email: 'example@mail.com', solde: '15', phone: '999999999', adresse: 'XXXXXXXXXXXX' },
      { ench: this.ench, ref: '4', image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png', date: '02/09/2021', nom: 'Foulen2 Fouleni', email: 'hassinebahri@gmail.com', solde: '30', phone: '999999999', adresse: 'XXXXXXXXXXXX' },
      { ench: this.ench, ref: '5', image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png', date: '02/09/2021', nom: 'Ahmed Bahri', email: 'mail@mail.com', solde: '15', phone: '999999999', adresse: 'XXXXXXXXXXXX' },
      { ench: this.ench, ref: '6', image: 'https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png', date: '02/09/2021', nom: 'Med chouiref', email: 'hassinebahri@gmail.com', solde: '200', phone: '999999999', adresse: 'XXXXXXXXXXXX' },

    ];
    this.somme= this.totlal(this.ench)
  }


  ngOnInit(): void {
  }


  //DETAILS
  detail(data) {

    this.dialog.open(DetailClinetComponent, { data }
      
    );
    console.log(this.somme)


  }

  //DELETE
  delete(ref) {
    Swal.fire({
      title: 'êtes-vous sûr?',
      text: "Supprimer Produit",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui'
    }).then((result) => {
      if (result.isConfirmed) {
        this.supp(ref),
          Swal.fire(
            'Supprimée!',
            'Le Produit a été supprimé ',
            'success'
          )
      }
    })
  }

  supp(cat) {

    this.data = this.data.filter(
      item => item.ref != cat.ref
    )
    // this.data.splice(index, 1);

  }


  //update
  openUpdate(cat) {
    console.log(cat);
    Swal.fire({
      title: 'Modifier Produit',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
        Placeholder: 'Nom de produit'

      },
      inputValue: cat.nom,
      confirmButtonText: 'Enregistrer',
      showCloseButton: true,
      showLoaderOnConfirm: true,

    }).then((result) => {
      if (result.isConfirmed) {
        this.update(cat, result.value)
        Swal.fire(
          'Modifiéé!',
          'Le Client a été modifié ',
          'success'
        )
      }
    })

  }

  update(cat, value) {
    let index = this.data.findIndex(
      e => e.ref == cat.ref
    )
    this.data[index].nom = value
  }

  totlal(data){
    let somme =0;
    for (let i=0; i< data.length; i++){
      somme+= data[i].click;
    }
    return somme;
  }

}
