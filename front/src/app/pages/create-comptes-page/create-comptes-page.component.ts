import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { BanqueService } from 'src/app/services/banque.service';
import { DropdownModule } from 'primeng/dropdown';
import { ClientModel } from 'src/app/models/client-model';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CompteModel } from 'src/app/models/compte-model';

@Component({
  selector: 'app-create-comptes-page',
  standalone: true,
  providers: [MessageService],
  imports: [
    NavBarComponent,
    ToastModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule
  ],
  templateUrl: './create-comptes-page.component.html',
  styleUrl: './create-comptes-page.component.scss'
})
export class CreateComptesPageComponent {
  constructor(private messageService: MessageService,
    private banqueService: BanqueService
  ) { };

  clients: ClientModel[] = [];
  selectedClient: ClientModel | undefined;
  balance: number | undefined;
  accountName: string = '';
  

  ngOnInit(): void {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
  }

  addCompte() {
    const newCompte: CompteModel = {
      balance: this.balance as number,
      client: this.selectedClient as ClientModel,
      accountName: this.accountName as string,
      numero: 0,
      id: 0
    };
    this.banqueService.createCompte(newCompte).subscribe({
      next: response => {
        this.showSuccess();
      },
      error: error => {
        this.showError();
      }
    });
    this.clear();
  }

  clear(){
    this.selectedClient = undefined;
    this.accountName = '';
    this.balance = undefined;
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Création du Compte' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Echec de la création du Compte' });
}

  isFormValid(){
  if(this.balance){
    if(this.balance >= 0 && this.selectedClient !== undefined)
      return true;
    else
      return false; 
  }else{
    return false;
  }
}
}