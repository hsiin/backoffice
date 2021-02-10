import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: '', class: '' },
  { path: '/table-list', title: 'Categorie', icon: '', class: '' },
  { path: '/produit', title: 'Produit', icon: '', class: '' },
  { path: '/enchere', title: 'Enchères', icon: '', class: '' },
  { path: '/client', title: 'Client', icon: '', class: '' },
  { path: '/jeton', title: 'Jeton', icon: '', class: '' },
  { path: '/paiement', title: 'Paiement', icon: '', class: '' },
  { path: '/publicites', title: 'Publicités', icon: '', class: '' },
  { path: '/fournisseur', title: 'Fournisseur', icon: '', class: '' },
  { path: '/gestion-users', title: 'Gestion utilisateur', icon: '', class: '' },
  { path: '/vainqueurs', title: 'Vainqueurs', icon: '', class: '' },
  { path: '/newsletter', title: 'NewsLetter', icon: '', class: '' },

  

  


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
