import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { ProduitComponent } from '../../produit/produit.component';
import { EnchereComponent } from '../../enchere/enchere.component';
import { ClientComponent } from "../../client/client.component";
import { JetonComponent } from "../../jeton/jeton.component";
import { PaiementComponent } from "../../paiement/paiement.component";
import { PublicitesComponent } from "../../publicites/publicites.component";
import { FournisseurComponent } from "../../fournisseur/fournisseur.component";
import { GestionUtilComponent } from "../../gestion-util/gestion-util.component";
import { VainqueurComponent } from "../../vainqueur/vainqueur.component";
import { NewsletterComponent } from "../../newsletter/newsletter.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'produit', component: ProduitComponent },
    { path: 'enchere', component: EnchereComponent },
    { path: 'client', component: ClientComponent },
    { path: 'jeton', component: JetonComponent },
    { path: 'paiement', component: PaiementComponent },
    { path: 'publicites', component: PublicitesComponent },
    { path: 'fournisseur', component: FournisseurComponent },
    { path: 'gestion-users', component: GestionUtilComponent },
    { path: 'vainqueurs', component: VainqueurComponent },
    { path: 'newsletter', component: NewsletterComponent },


];
