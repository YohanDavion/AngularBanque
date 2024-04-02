import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BankerDashboardComponent } from './banker-dashboard/banker-dashboard.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { TransferManagementComponent } from './transfer-management/transfer-management.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'banker-dashboard', component: BankerDashboardComponent },
  { path: 'account-management', component: AccountManagementComponent },
  { path: 'transfer-management', component: TransferManagementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
