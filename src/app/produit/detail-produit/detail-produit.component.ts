import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {  
  data : Array<any>;
  constructor() { 
    this.data=[
      {image:'https://brandmark.io/logo-rank/random/pepsi.png'},
      {image:'https://brandmark.io/logo-rank/random/pepsi.png'},
      {image:'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'},
      {image:'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'},
    ];
  }
  
  ngOnInit(): void {
  }

}
