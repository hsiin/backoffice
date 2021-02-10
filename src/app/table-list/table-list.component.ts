import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogClose, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  data : Array<any>;
  constructor(public dialog: MatDialog) { 

    this.data=[
      {ref:'1',date: '11/04/1998',  categorie:'cat1'},
      {ref:'2',date: '11/04/1998',  categorie:'cat1'},
      {ref:'3',date: '11/04/1998',  categorie:'cat1'},
      {ref:'4',date: '11/04/1998',  categorie:'cat1'},
      {ref:'1',date: '11/04/1998',  categorie:'cat1'},
      {ref:'5',date: '11/04/1998',  categorie:'cat1'},
      {ref:'6',date: '11/04/1998',  categorie:'cat1'},
      {ref:'7',date: '11/04/1998',  categorie:'cat1'},
      {ref:'8',date: '11/04/1998',  categorie:'cat1'}
     
    ];

  }

  ngOnInit() {
    
  }

  openAdd(){
    Swal.fire({
      title: 'Ajouter Catégorie',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
        Placeholder: 'Nom de Catégorie'
      },
      confirmButtonText: 'Enregistrer',
      showCloseButton: true,
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Le champ est vide: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Catégorie ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    
    
  }


  openUpdate(){
    Swal.fire({
      title : 'Modifier Catégorie',
      input : 'text',
      inputAttributes: {
        autocapitalize: 'off',
        Placeholder: 'Nom de Catégorie'
      },
      confirmButtonText: 'Enregistrer',
      showCloseButton: true,
      showLoaderOnConfirm: true,
      
    })
  }

  delete(){
    Swal.fire({
      title: 'êtes-vous sûr?',
      text: "Supprimer Catégorie",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Annuler' ,
      confirmButtonText: 'Oui'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Supprimée!',
          'La catégorie a été supprimé ',
          'success'
        )
      }
    })
  }
    
  

}
