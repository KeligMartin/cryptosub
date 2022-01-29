import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogData, HomeComponent} from '../../home.component';

@Component({
  selector: 'app-dialog-new-car',
  templateUrl: './dialog-new-car.component.html',
  styleUrls: ['./dialog-new-car.component.css']
})
export class DialogNewCarComponent {
  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
