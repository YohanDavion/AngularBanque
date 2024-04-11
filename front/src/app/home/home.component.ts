import { Component } from '@angular/core';
import { BanqueService } from '../services/banque.service';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  items: MenuItem[] = []; 
  valueClient: any;

  constructor(private banqueService: BanqueService) { }

  ngOnInit(): void {
    console.log("init");
    this.valueClient = this.banqueService.getClientList();
    this.items = [ 
      { 
          label: 'Clients', 
          items: [ 
            { 
                label: 'Créer un Client'
            }, 
            { 
                label: 'Liste des Clients'
            } 
          ] 
      }, 
      { 
          label: 'Comptes', 

          items: [ 
            { 
                label: 'Créer un Compte'
            }, 
            { 
                label: 'Liste des Comptes'
            } 
          ] 
      },
      { 
        label: 'Virements', 

        items: [ 
          { 
              label: 'Faire un Virement'
          }, 
          { 
              label: 'Historique des Virements'
          } 
        ] 
    } 
    ];  
  }
}
