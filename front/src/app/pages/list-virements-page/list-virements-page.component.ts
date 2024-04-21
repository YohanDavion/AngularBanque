import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { ClientModel } from 'src/app/models/client-model';
import { CompteModel } from 'src/app/models/compte-model';
import { VirementModel } from 'src/app/models/virement-model';
import { BanqueService } from 'src/app/services/banque.service';
import { Location } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-list-virements-page',
  standalone: true,
  imports: [NavBarComponent,DropdownModule,FormsModule,CommonModule,CardModule,TableModule],
  templateUrl: './list-virements-page.component.html',
  styleUrl: './list-virements-page.component.scss'
})
export class ListVirementsPageComponent {
  constructor(private banqueService: BanqueService, private location: Location) { };

  allVirements: VirementModel[] = [];
  allComptes: CompteModel[] = [];

  virements: VirementModel[] = [];
  clients: ClientModel[] = [];
  selectedClient?: ClientModel;
  comptes: CompteModel[] = [];
  selectedCompte?: CompteModel;

  async ngOnInit(): Promise<void> {
    const state = this.location.getState() as any;
    await this.getClients();
    await this.getComptes();
    await this.getVirements();
    if(state.compte){
      this.selectedClient = (<ClientModel>state.client);
      await this.getComptesByClient(); 
      this.selectedCompte = (<CompteModel>state.compte);
      await this.getVirementsByCompte();
    }
  }
 
  getClientById(id: number): ClientModel | undefined {
    return this.clients.find((client) => client.id == id);
  }

  getComptesById(id: number): CompteModel | undefined {
    return this.allComptes.find((compte) => compte.id == id);
  }

  getClients(){
    return new Promise(resolve => {
      this.banqueService.getAllClients().subscribe(data => {
        this.clients = data.map((client: ClientModel) => ({
          ...client,
          name: client.firstname + ' ' + client.lastname,
        }));
        resolve(true);
      });
    });
  }
  
  getComptes(){
    return new Promise(resolve => {
      this.banqueService.getAllComptes().subscribe(data => {
        this.allComptes = data;
        resolve(true);
      });
    });
  }
  
  getVirements(){
    return new Promise(resolve => {
      this.banqueService.getAllVirements().subscribe(data => {
        this.allVirements = data;
        this.virements = data.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime());
        resolve(true);
      });
    });
  }

  async getComptesByClient(){
    this.comptes = [];
    this.selectedCompte = undefined;
    if(this.selectedClient){
      this.comptes = await firstValueFrom(this.banqueService.getCompte(this.selectedClient.id));
    }
  }

  getVirementsByClient(){
    if(!this.selectedClient){
      this.virements = this.allVirements;
      return;
    }
    this.virements = this.allVirements.filter((virement) => 
      virement.idClientEmetteur == this.selectedClient?.id || 
      virement.idClientDestinataire == this.selectedClient?.id);
  }

  getVirementsByCompte(){
    if(!this.selectedCompte){
      this.getVirementsByClient();
      return;
    }
    this.virements = this.allVirements.filter((virement) => 
      virement.idCompteEmetteur == this.selectedCompte?.id || 
      virement.idCompteDestinataire == this.selectedCompte?.id);
  }

  clientUpdated(){
    this.getComptesByClient();
    this.getVirementsByClient();
  }

  compteUpdated(){
    this.getVirementsByCompte();
  }

}
