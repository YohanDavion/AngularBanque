import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NavBarComponent } from '../composants/nav-bar/nav-bar.component';
import { BanqueService } from '../services/banque.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent,CardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  constructor(private banqueService: BanqueService) { };
  numberOfClients?: number;
  numberOfAccounts?: number;
  amountOfMoney?: number;
  numberOfTransfers?: number;

  ngOnInit(): void {
    this.banqueService.getNumberOfClients().subscribe(data => {
      this.numberOfClients = data;
    });
    this.banqueService.getNumberOfComptes().subscribe(data => {
      this.numberOfAccounts = data;
    });
    this.banqueService.getAmmountOfBalance().subscribe(data => {
      this.amountOfMoney = data;
    });
    this.banqueService.getNumberOfVirements().subscribe(data => {
      this.numberOfTransfers = data;
    });
  }
}
