import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListClientsPageComponent } from './pages/list-clients-page/list-clients-page.component';
import { CreateClientsPageComponent } from './pages/create-clients-page/create-clients-page.component';
import { CreateComptesPageComponent } from './pages/create-comptes-page/create-comptes-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full'},
  { path: 'accueil', component: HomeComponent },
  { path: 'clients/liste', component: ListClientsPageComponent },
  { path: 'clients/creer', component: CreateClientsPageComponent },
  { path: 'comptes/creer', component: CreateComptesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
