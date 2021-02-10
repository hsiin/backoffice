import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';
import Swal from 'sweetalert2';
import { AjouterProduitComponent } from "./ajouter-produit/ajouter-produit.component";
import { DetailProduitComponent } from './detail-produit/detail-produit.component'

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  data : Array<any>;
  images : Array<any>;

  constructor(public dialog: MatDialog) {
    
    this.data=[
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'1',date: '11/04/1998', produit:'Xbox', categorie:'cat1', fourni:'Ahmed',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'2',date: '11/04/1998',produit:'Xbox',categorie:'cat2', fourni:'Hassine',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'3',date: '11/04/1998',produit:'Xbox',categorie:'cat3', fourni:'Ali',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'4',date: '11/04/1998',produit:'Xbox',categorie:'cat4', fourni:'Foulen',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'5',date: '11/04/1998',produit:'Xbox',categorie:'cat5', fourni:'Fouleni',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'6',date: '11/04/1998',produit:'Xbox',categorie:'cat6', fourni:'Mouhammed',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'7',date: '11/04/1998',produit:'Xbox',categorie:'cat7', fourni:'Arabia',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'8',date: '11/04/1998',produit:'Xbox',categorie:'cat8', fourni:'Sony',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'9',date: '11/04/1998',produit:'Xbox',categorie:'cat9', fourni:'Ahmed',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'10',date: '11/04/1998',produit:'Xbox',categorie:'cat10', fourni:'Ahmed',prix:'600'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'11',date: '11/04/1998',produit:'Xbox',categorie:'cat11', fourni:'Ahmed',prix:'600'},
    ];

   }
  
 

  ngOnInit(): void {
  }

  delete(cat){
    Swal.fire({
      title: 'êtes-vous sûr?',
      text: "Supprimer Produit",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Annuler' ,
      confirmButtonText: 'Oui'
    }).then((result) => {
      if (result.isConfirmed) {
        this.supp(cat),
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
  openUpdate(cat){
    console.log(cat);
    Swal.fire({
      title : 'Modifier Produit',
      input : 'text',
      inputAttributes: {
        autocapitalize: 'off',
        Placeholder: 'Nom de produit'
        
      },
      inputValue : cat.produit,
      confirmButtonText: 'Enregistrer',
      showCloseButton: true,
      showLoaderOnConfirm: true,
      
    }).then((result) => {
      if (result.isConfirmed) {
        this.update(cat, result.value)
        Swal.fire(
          'Modifiéé!',
          'Le Produit a été modifié ',
          'success'
        )
      }
    })
  
  }

    update(cat , value){
       let index = this.data.findIndex(
         e => e.ref == cat.ref
       )
       this.data[index].produit= value
    }


    openAdd(){
      Swal.fire({
        title: 'Ajouter Produit',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
          Placeholder: 'Nom de produit'
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
            title: 'Produit ajouté avec succès',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      
      
    }


    openAjout(){
      this.dialog.open(AjouterProduitComponent);
    }



    Ajoutcat(){
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

    clicked(cat){
      this.dialog.open(DetailProduitComponent);  

    }
  
  


  
}
