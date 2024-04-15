import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { BanqueService } from 'src/app/services/banque.service';
import { DropdownModule } from 'primeng/dropdown';
import { ClientModel } from 'src/app/models/client-model';

@Component({
  selector: 'app-create-comptes-page',
  standalone: true,
  providers: [MessageService],
  imports: [
    NavBarComponent,
    ToastModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  templateUrl: './create-comptes-page.component.html',
  styleUrl: './create-comptes-page.component.scss'
})
export class CreateComptesPageComponent {
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private banqueService: BanqueService
  ) { };

  clients: ClientModel[] = [];
  selectedClient: ClientModel | undefined;

  ngOnInit(): void {
    this.banqueService.getAllClients().subscribe(data => {
      this.clients = data.map((client: ClientModel) => ({
        ...client,
        name: client.firstname + ' ' + client.lastname,
      }));
    });
  }

  addCompte() {
  }

}