import { Component } from '@angular/core';
import {ContractService} from './service/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private contractService: ContractService) {}

  connectAccount() {
    this.contractService.connectAccount().then(
      _ => console.log('Connected !')
    );
  }

  isConnected(): boolean {
    return this.contractService.isConnected();
  }

  getSubscribe() {
    this.contractService.getSubscribe().then(data => {
      console.log('contract subscribe value -> ' + data.toString());
    }).catch(err => {
      console.log(err);
    })
  }
}
