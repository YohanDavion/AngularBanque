import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { ClientModel } from 'src/app/models/client-model';
import { BanqueService } from 'src/app/services/banque.service';
import { TagModule } from 'primeng/tag';
import { CompteModel } from 'src/app/models/compte-model';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { VirementModel } from 'src/app/models/virement-model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-create-virements-page',
  standalone: true,
  providers: [MessageService],
  imports: [
    NavBarComponent,
    CommonModule,
    DropdownModule,
    CardModule,
    FormsModule,
    TagModule,
    InputTextModule,
    ButtonModule,
    ToastModule],
  templateUrl: './create-virements-page.component.html',
  styleUrl: './create-virements-page.component.scss'
})
export class CreateVirementsPageComponent {
  constructor(private banqueService: BanqueService,
    private messageService: MessageService) { };
  virement!: VirementModel;

  balance?: number;
  clients: ClientModel[] = [];

  comptesEmetteur: CompteModel[] = [];
  selectedClientEmetteur?: ClientModel;
  selectedCompteEmetteur?: CompteModel;

  comptesDestinator: CompteModel[] = [];
  selectedClientDestinator?: ClientModel;
  selectedCompteDestinator?: CompteModel;

  ngOnInit(): void {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
  }

  getCompteEmetteur(){
    this.selectedCompteEmetteur = undefined;
    if(this.selectedClientEmetteur){
      this.banqueService.getCompte(this.selectedClientEmetteur.id).subscribe(data => {
        this.comptesEmetteur = data;
      });
    }
  }
  getCompteDestinator(){
    this.selectedCompteDestinator = undefined;
    if(this.selectedClientDestinator){
      this.banqueService.getCompte(this.selectedClientDestinator.id).subscribe(data => {
        if(this.selectedClientEmetteur?.id == this.selectedClientDestinator?.id){
          for (let compte of data) {
            if(compte.id == this.selectedCompteEmetteur?.id){
              data = data.filter((c: CompteModel) => c.id != this.selectedCompteEmetteur?.id);
            }
        }
      }
      this.comptesDestinator = data;
    });
  }
}

isFormValid(){
    if(this.selectedClientDestinator !== undefined &&
      this.selectedClientEmetteur !== undefined &&
      this.selectedCompteEmetteur !== undefined &&
      this.selectedCompteDestinator !== undefined &&
      this.balance !== undefined &&  this.balance > 0
    )
      return true;
    else
      return false;
}

  addVirement(){
    if(this.selectedCompteEmetteur && this.selectedCompteDestinator && this.balance){
      this.virement = new VirementModel(0,this.selectedCompteEmetteur.id,this.selectedCompteDestinator.id,this.balance,new Date());
      this.clearForm();
      this.banqueService.createVirement(this.virement).subscribe({
        next: response => {
          this.showSuccess();
        },
        error: error => {
          this.showError();
        }
      });
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Virement effectué' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Echec du virement' });
}

clearForm(){
  this.selectedClientDestinator = undefined;
  this.selectedClientEmetteur = undefined;
  this.selectedCompteDestinator = undefined;
  this.selectedCompteEmetteur = undefined;
  this.balance = undefined;
}
}
