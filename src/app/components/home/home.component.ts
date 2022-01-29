import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from '../../model/Car';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogNewCarComponent} from './dialog/dialog-new-car/dialog-new-car.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface DialogData {
  car: Car;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'sold', 'buy'];
  dataSource: MatTableDataSource<Car> = new MatTableDataSource<Car>();

  dialogCar: Car = new Car('', 0, false);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(public router: Router, private contractService: ContractService, public dialog: MatDialog) {
    this.refreshDataSource();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  storeCar(name: string, price: number) {
    this.contractService.storeCar(name, price).then(data => {
      console.log('contract storeCar result -> ' + data.toString());
      this.refreshDataSource();
    }).catch(err => {
      console.log(err);
    })
  }

  buyCar(index: number) {
    this.contractService.buyCar(index).then(data => {
      console.log('contract buyCar result -> ' + data.toString());
      this.refreshDataSource();
    }).catch(err => {
      console.log(err);
    })
  }

  refreshDataSource(): void {
    this.contractService.getCars().then(
      cars => {
        this.dataSource = new MatTableDataSource(cars);
        this.dataSource.sort = this.sort;
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogNewCarComponent, {
      width: '250px',
      data: {car: this.dialogCar},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result !== undefined) {
        this.storeCar(result.name, result.price)
      }
    });
  }

}
