import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule,ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  items: MenuItem[] = []; 
  ngOnInit(): void {
    this.items = [ 
      { 
        label: 'Accueil', 
        routerLink: ['/accueil'],
                routerLinkActiveOptions: {
                  exact: true
                }
      },
      { 
          label: 'Clients', 
          items: [ 
            { 
                label: 'Créer un Client',
                routerLink: ['/clients/creer'],
                routerLinkActiveOptions: {
                  exact: true
                }
            }, 
            { 
                label: 'Liste des Clients',
                routerLink: ['/clients/liste'],
                routerLinkActiveOptions: {
                  exact: true
                }
            } 
          ] 
      }, 
      { 
          label: 'Comptes', 

          items: [ 
            { 
                label: 'Créer un Compte',
                routerLink: ['/comptes/creer'],
                routerLinkActiveOptions: {
                  exact: true
                }
            }, 
            { 
                label: 'Liste des Comptes',
                routerLink: ['/comptes/liste'],
                routerLinkActiveOptions: {
                  exact: true
                }
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
