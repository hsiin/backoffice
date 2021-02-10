import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from "@angular/material/dialog";





import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { AjouterProduitComponent } from './produit/ajouter-produit/ajouter-produit.component';
import { EnchereComponent } from './enchere/enchere.component';
import { DetailProduitComponent } from './produit/detail-produit/detail-produit.component';
import { AjouterEnchereComponent } from './enchere/ajouter-enchere/ajouter-enchere.component';
import { AffterJetComponent } from './enchere/affter-jet/affter-jet.component';
import { AffecterClientComponent } from './enchere/affecter-client/affecter-client.component';
import { DetailEnchereComponent } from './enchere/detail-enchere/detail-enchere.component';
import { ClientComponent } from './client/client.component';
import { JetonComponent } from './jeton/jeton.component';
import { PaiementComponent } from './paiement/paiement.component';
import { PublicitesComponent } from './publicites/publicites.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { VainqueurComponent } from './vainqueur/vainqueur.component';
import { AjoutVainqueurComponent } from './vainqueur/ajout-vainqueur/ajout-vainqueur.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AjoutNewsletterComponent } from './newsletter/ajout-newsletter/ajout-newsletter.component';
import { DetailClinetComponent } from './client/detail-clinet/detail-clinet.component';
import { AjouterJetonComponent } from './jeton/ajouter-jeton/ajouter-jeton.component';
import { ModifierJetonComponent } from './jeton/modifier-jeton/modifier-jeton.component';
import { DetailJetonComponent } from './jeton/detail-jeton/detail-jeton.component';
import { AjouterPubComponent } from './publicites/ajouter-pub/ajouter-pub.component';
import { ModifierPubComponent } from './publicites/modifier-pub/modifier-pub.component';
import { AjoutFourniComponent } from './fournisseur/ajout-fourni/ajout-fourni.component';
import { ModifierFourniComponent } from './fournisseur/modifier-fourni/modifier-fourni.component';
import { GestionUtilComponent } from './gestion-util/gestion-util.component';
import { AjoutUtilComponent } from './gestion-util/ajout-util/ajout-util.component';
import { ModifierUtilComponent } from './gestion-util/modifier-util/modifier-util.component';
import { ModifNewsletterComponent } from './newsletter/modif-newsletter/modif-newsletter.component';
 




@NgModule({
  imports: [
    BrowserModule,
    MatDialogModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    ProduitComponent,
    AjouterProduitComponent,
    EnchereComponent,
    DetailProduitComponent,
    AjouterEnchereComponent,
    AffterJetComponent,
    AffecterClientComponent,
    DetailEnchereComponent,
    ClientComponent,
    JetonComponent,
    PaiementComponent,
    PublicitesComponent,
    FournisseurComponent,
    VainqueurComponent,
    AjoutVainqueurComponent,
    NewsletterComponent,
    AjoutNewsletterComponent,
    DetailClinetComponent,
    AjouterJetonComponent,
    ModifierJetonComponent,
    DetailJetonComponent,
    AjouterPubComponent,
    ModifierPubComponent,
    AjoutFourniComponent,
    ModifierFourniComponent,
    GestionUtilComponent,
    AjoutUtilComponent,
    ModifierUtilComponent,
    ModifNewsletterComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
