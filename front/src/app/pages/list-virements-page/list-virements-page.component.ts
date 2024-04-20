import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { ClientModel } from 'src/app/models/client-model';
import { CompteModel } from 'src/app/models/compte-model';
import { VirementModel } from 'src/app/models/virement-model';
import { BanqueService } from 'src/app/services/banque.service';

@Component({
  selector: 'app-list-virements-page',
  standalone: true,
  imports: [NavBarComponent,DropdownModule,FormsModule,CommonModule,CardModule,TableModule],
  templateUrl: './list-virements-page.component.html',
  styleUrl: './list-virements-page.component.scss'
})
export class ListVirementsPageComponent {
  constructor(private banqueService: BanqueService) { };

  virements: VirementModel[] = [];
  clients: ClientModel[] = [];
  comptes: CompteModel[] = [];
  selectedClient?: ClientModel;
  selectedCompte?: CompteModel;

  ngOnInit(): void {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
    this.banqueService.getAllVirements().subscribe(data => {
      this.virements = data;
    });
  }

  getClient(id: number): ClientModel | undefined {
    client: ClientModel | undefined;
    return client;
  }

  getComptes(){
    this.selectedCompte = undefined;
    if(this.selectedClient){
      this.banqueService.getCompte(this.selectedClient.id).subscribe(data => {
        this.comptes = data;
      });
    }
  }

  getVirements(){
    this.virements = [];
    if(this.selectedCompte){
      this.banqueService.getAllVirements().subscribe(data => {
        this.virements = data;
      });
    }
  }
}
