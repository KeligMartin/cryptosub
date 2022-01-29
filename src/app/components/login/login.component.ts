import { Component, OnInit } from '@angular/core';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public router: Router, private contractService: ContractService) {}

  connectAccount() {
    this.contractService.connectAccount().then(
      _ => {
        console.log('Connected !');
        this.router.navigate(['/home']);
      }
    );
  }

}
