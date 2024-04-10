import { Component } from '@angular/core';
import { BanqueService } from '../services/banque.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  valueClient: any;

  constructor(private banqueService: BanqueService) { }

  ngOnInit(): void {
    console.log("init");
    this.valueClient = this.banqueService.getClientList();
  }
}
