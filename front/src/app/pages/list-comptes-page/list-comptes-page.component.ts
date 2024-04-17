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

@Component({
  selector: 'app-list-comptes-page',
  standalone: true,
  imports: [
    TableModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    CardModule,
    NavBarComponent],
  templateUrl: './list-comptes-page.component.html',
  styleUrl: './list-comptes-page.component.scss'
})
export class ListComptesPageComponent {
  clients: ClientModel[] = [];
  selectedClient: ClientModel | undefined;
  comptes: CompteModel[] = [];

  constructor(private banqueService: BanqueService) {};

  ngOnInit() {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
  }
  getCompte(){
    if(this.selectedClient){
      this.banqueService.getCompte(this.selectedClient.id).subscribe(data => {
        this.comptes = data;
      });
    }
  }
}
