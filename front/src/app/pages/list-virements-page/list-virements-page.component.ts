import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { NavBarComponent } from 'src/app/composants/nav-bar/nav-bar.component';

@Component({
  selector: 'app-list-virements-page',
  standalone: true,
  imports: [NavBarComponent,DropdownModule],
  templateUrl: './list-virements-page.component.html',
  styleUrl: './list-virements-page.component.scss'
})
export class ListVirementsPageComponent {
  selectedClient?: ClientModel;
  selectedCompte?: CompteModel;

}
