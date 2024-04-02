import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BankerDashboardComponent } from './banker-dashboard/banker-dashboard.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { TransferManagementComponent } from './transfer-management/transfer-management.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BankerDashboardComponent,
    AccountManagementComponent,
    TransferManagementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
