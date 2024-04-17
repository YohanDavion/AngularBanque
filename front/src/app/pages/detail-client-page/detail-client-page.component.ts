import { Component } from '@angular/core';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { Location } from '@angular/common';
import { ClientModel } from 'src/app/models/client-model';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { BanqueService } from 'src/app/services/banque.service';
import { CompteModel } from 'src/app/models/compte-model';

@Component({
  selector: 'app-detail-client-page',
  standalone: true,
  imports: [NavBarComponent,CardModule,TableModule],
  templateUrl: './detail-client-page.component.html',
  styleUrl: './detail-client-page.component.scss'
})
export class DetailClientPageComponent {
  clients: ClientModel | undefined;
  selectedClient: ClientModel | undefined;
  comptes: CompteModel[] = [];

  constructor(private location: Location,private banqueService: BanqueService) { }

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
}
