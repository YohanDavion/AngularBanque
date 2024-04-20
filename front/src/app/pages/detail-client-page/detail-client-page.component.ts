import { Component } from '@angular/core';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { Location } from '@angular/common';
import { ClientModel } from 'src/app/models/client-model';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BanqueService } from 'src/app/services/banque.service';
import { CompteModel } from 'src/app/models/compte-model';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-detail-client-page',
  standalone: true,
  providers: [MessageService],
  imports: [NavBarComponent,CardModule,TableModule,ButtonModule,ToastModule],
  templateUrl: './detail-client-page.component.html',
  styleUrl: './detail-client-page.component.scss'
})
export class DetailClientPageComponent {
  clients: ClientModel | undefined;
  selectedClient: ClientModel | undefined;
  comptes: CompteModel[] = [];

  constructor(private location: Location,private banqueService: BanqueService,private messageService: MessageService) { }

  ngOnInit() {
    const state = this.location.getState() as any;
    this.clients = state.client;
    this.getCompte();
  }

  getCompte(){
    if(this.clients){
      this.banqueService.getCompte(this.clients.id).subscribe(data => {
        this.comptes = data;
      });
    }
  }

  deleteCompte(compte: CompteModel){
    this.banqueService.deleteCompte(compte.id).subscribe({
      next: response => {
        this.showSuccess();
      },
      error: error => {
        this.showError();
      }
    });
  }

  showSuccess() {
    this.getCompte();
    this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Suppréssion du Compte' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Echec de la suppréssion du Compte' });
  }

  click(){
    
  }
}
