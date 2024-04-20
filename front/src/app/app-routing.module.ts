import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListClientsPageComponent } from './pages/list-clients-page/list-clients-page.component';
import { CreateClientsPageComponent } from './pages/create-clients-page/create-clients-page.component';
import { CreateComptesPageComponent } from './pages/create-comptes-page/create-comptes-page.component';
import { ListComptesPageComponent } from './pages/list-comptes-page/list-comptes-page.component';
import { DetailClientPageComponent } from './pages/detail-client-page/detail-client-page.component';
import { CreateVirementsPageComponent } from './pages/create-virements-page/create-virements-page.component';
import { ListVirementsPageComponent } from './pages/list-virements-page/list-virements-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: HomeComponent },
  { path: 'clients/liste', component: ListClientsPageComponent },
  { path: 'comptes/liste', component: ListComptesPageComponent },
  { path: 'virements/liste', component: ListVirementsPageComponent },
  { path: 'clients/creer', component: CreateClientsPageComponent },
  { path: 'comptes/creer', component: CreateComptesPageComponent },
  { path: 'virements/creer', component: CreateVirementsPageComponent },
  { path: 'detail/client', component: DetailClientPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
