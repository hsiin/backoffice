import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
 data: Array<any>
 
  constructor() { 
    this.data=[
      {ref:'1', date:'10/02/2021', num:'1234', client:'Hassine Bahri',enchere: 'Vente Samsung', produit:'Samsung Galaxy S20',etat:'En attente'},
      {ref:'2', date:'10/02/2021', num:'1234', client:'Hassine Bahri',enchere: 'Vente Samsung', produit:'Samsung Galaxy S20',etat:'Succées'},
      {ref:'3', date:'10/02/2021', num:'1234', client:'Hassine Bahri',enchere: 'Vente Samsung', produit:'Samsung Galaxy S20',etat:'En attente'},
      {ref:'4', date:'10/02/2021', num:'1234', client:'Hassine Bahri',enchere: 'Vente Samsung', produit:'Samsung Galaxy S20',etat:'Succées'},
      {ref:'5', date:'10/02/2021', num:'1234', client:'Hassine Bahri',enchere: 'Vente Samsung', produit:'Samsung Galaxy S20',etat:'En attente'},

    ];


   }

  ngOnInit(): void {
  }

}
