import { Component } from '@angular/core';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common'; 
import { BanqueService } from 'src/app/services/banque.service';

@Component({
  selector: 'app-create-clients-page',
  standalone: true,
  providers: [MessageService],
  imports: [
    NavBarComponent,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    ToastModule,
    CommonModule
  ],
  templateUrl: './create-clients-page.component.html',
  styleUrl: './create-clients-page.component.scss'
})

export class CreateClientsPageComponent{
  constructor(private fb: FormBuilder,
    private messageService: MessageService,
    private banqueService: BanqueService
  ) { };

  userForm = this.fb.group({
    firstName: ['',Validators.required], 
    lastName: ['',Validators.required],
  });

  addUser() {
    this.banqueService.createClient(this.userForm.value).subscribe({
      next: response => {
        this.showSuccess();
      },
      error: error => {
        this.showError();
      }
  });
    this.userForm.reset();
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Création du Client' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Echec', detail: 'Echec de la création du Client' });
}
}
