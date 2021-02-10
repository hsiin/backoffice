import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AjouterEnchereComponent } from "./ajouter-enchere/ajouter-enchere.component";
import { AffterJetComponent } from "./affter-jet/affter-jet.component";
import { AffecterClientComponent } from "./affecter-client/affecter-client.component";
import { DetailEnchereComponent } from "./detail-enchere/detail-enchere.component";

import { MatDialog } from "@angular/material/dialog";
import { from } from 'rxjs';

@Component({
  selector: 'app-enchere',
  templateUrl: './enchere.component.html',
  styleUrls: ['./enchere.component.css']
})
export class EnchereComponent implements OnInit {

  data: Array<any>;
  constructor( public dialog : MatDialog) {

    this.data = [
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'1',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'2',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'3',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'4',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'5',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'6',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
      {image:'https://compass-ssl.xbox.com/assets/83/53/83534a33-0998-43dc-915a-4ec0a686d679.jpg?n=10202018_Panes-3-up-1400_Hero-SX_570x570.jpg',ref:'7',dateC: '11/04/1998', dateL:'04/02/2002', min:'200', produit:'Xbox', categorie:'cat1', prixdep:'250d', nbutil:'300', totlajet:'20', encaissement:'300d'},
    ];
  }

  ngOnInit(): void {
  }

  //delete
  delete(cat) {
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
        this.supp(cat),
        Swal.fire(
          'Supprimée!',
          'Le Produit a été supprimé ',
          'success',
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


  //ADD_enchere
  AjoutEnchere(){
    this.dialog.open(AjouterEnchereComponent)
  }

  //ADD_jeton
  affectJet(){
    this.dialog.open(AffterJetComponent)

  }

  //AFFECTER_Client
  affectClient(){
    this.dialog.open(AffecterClientComponent)
  }

  //Details
  detailEnchaire(){
    this.dialog.open(DetailEnchereComponent);
  }


}
