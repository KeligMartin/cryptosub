import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ContractService} from './service/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router) {}

  isConnected(): boolean {
    return this.router.url !== '/login';
  }

  disconnect() {
    this.router.navigateByUrl('/login').then(
      _ => console.log('Logout successful')
    )
  }
}
