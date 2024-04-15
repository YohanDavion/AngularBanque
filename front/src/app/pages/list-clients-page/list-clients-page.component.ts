import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { BanqueService } from 'src/app/services/banque.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clients-page',
  standalone: true,
  imports: [NavBarComponent,CommonModule,TableModule,ButtonModule],
  templateUrl: './list-clients-page.component.html',
  styleUrl: './list-clients-page.component.scss'
})
export class ListClientsPageComponent {
  clients: any[] = [];

  constructor(private banqueService: BanqueService,private router: Router) { };

  ngOnInit(): void {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data;
    });
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  click(){

  }
}
