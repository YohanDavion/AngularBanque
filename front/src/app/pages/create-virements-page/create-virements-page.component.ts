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

@Component({
  selector: 'app-create-virements-page',
  standalone: true,
  imports: [
    NavBarComponent,
    CommonModule,
    DropdownModule,
    CardModule,
    FormsModule,
    TagModule,
    InputTextModule,
    ButtonModule],
  templateUrl: './create-virements-page.component.html',
  styleUrl: './create-virements-page.component.scss'
})
export class CreateVirementsPageComponent {
  constructor(private banqueService: BanqueService) { };
  balance: number | undefined;
  clients: ClientModel[] = [];

  comptesInitiator: CompteModel[] = [];
  selectedClientInitiator: ClientModel | undefined;
  selectedCompteInitiator: CompteModel | undefined;

  comptesDestinator: CompteModel[] = [];
  selectedClientDestinator: ClientModel | undefined;
  selectedCompteDestinator: CompteModel | undefined;
  ngOnInit(): void {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
  }

  getCompteInitiator(){
    this.selectedCompteInitiator = undefined;
    if(this.selectedClientInitiator){
      this.banqueService.getCompte(this.selectedClientInitiator.id).subscribe(data => {
        this.comptesInitiator = data;
      });
    }
  }
  getCompteDestinator(){
    this.selectedCompteDestinator = undefined;
    if(this.selectedClientDestinator){
      this.banqueService.getCompte(this.selectedClientDestinator.id).subscribe(data => {
        if(this.selectedClientInitiator?.id == this.selectedClientDestinator?.id){
          for (let compte of data) {
            if(compte.id == this.selectedCompteInitiator?.id){
              data = data.filter((c: CompteModel) => c.id != this.selectedCompteInitiator?.id);
            }
        }
        this.comptesDestinator = data;
      }
    });
  }
}
  addVirement(){

  }
}
