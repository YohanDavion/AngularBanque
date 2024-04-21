import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { TableModule } from 'primeng/table';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { BanqueService } from 'src/app/services/banque.service';
import { Router } from '@angular/router';
import { ClientModel } from 'src/app/models/client-model';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-list-clients-page',
  standalone: true,
  providers: [MessageService],
  imports: [NavBarComponent,CommonModule,TableModule,ButtonModule,ToastModule],
  templateUrl: './list-clients-page.component.html',
  styleUrl: './list-clients-page.component.scss'
})
export class ListClientsPageComponent {
  clients: ClientModel[] = [];

  constructor(
    private banqueService: BanqueService,
    private router: Router,
    private messageService: MessageService) { };

  ngOnInit(): void {
    this.getClient();
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  goToDetail(pageName:string,client:ClientModel){
    this.router.navigate(['detail/client'],{state:{client}});
  }

  deleteClient(client: ClientModel){
    this.banqueService.deleteClient(client.id).subscribe({
      next: response => {
        this.showSuccess();
      },
      error: error => {
        this.showError();
      }
    });
  }

  getClient(){
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }))});
  }

  showSuccess() {
    this.getClient();
    this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Suppréssion du Client' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Echec de la suppréssion du Client' });
}
}
