import { Component } from '@angular/core';
import { ClientModel } from 'src/app/models/client-model';
import { BanqueService } from 'src/app/services/banque.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { CompteModel } from 'src/app/models/compte-model';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-comptes-page',
  standalone: true,
  providers: [MessageService],
  imports: [
    TableModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    CardModule,
    NavBarComponent,
    ToastModule],
  templateUrl: './list-comptes-page.component.html',
  styleUrl: './list-comptes-page.component.scss'
})
export class ListComptesPageComponent {
  clients: ClientModel[] = [];
  selectedClient: ClientModel | undefined;
  comptes: CompteModel[] = [];

  constructor(private banqueService: BanqueService,
    private messageService: MessageService,
    private router: Router) {};

  ngOnInit() {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
  }
  getCompte(){
    this.comptes = [];
    if(this.selectedClient){
      this.banqueService.getCompte(this.selectedClient.id).subscribe(data => {
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
  goToDetail(pageName:string,client:ClientModel,compte:CompteModel){
  this.router.navigate(['virements/liste'],{state:{client,compte}});
  }
}
