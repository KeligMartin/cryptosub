import { Component } from '@angular/core';
import {ContractService} from './service/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private isUserLogged: boolean = false;

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

  storeCar() {
    this.contractService.storeCar('Car1', 10000).then(data => {
      console.log('contract storeCar result -> ' + data.toString());
    }).catch(err => {
      console.log(err);
    })
  }

  getCar() {
    this.contractService.getCar(0).then(data => {
      console.log('contract getCar result -> ' + data.toString());
    }).catch(err => {
      console.log(err);
    })
  }
}
