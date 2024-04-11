import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  items: MenuItem[] = []; 
  ngOnInit(): void {
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
