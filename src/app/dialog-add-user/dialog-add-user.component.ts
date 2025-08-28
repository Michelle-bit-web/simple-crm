import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user: User = new User;

  constructor(public dialogService: MatDialog) { }

  onCancel(): void {
    this.dialogService.closeAll();
  }

  saveUser(): void {
    if (this.user.birthDate instanceof Date) {
      this.user.birthDate = this.user.birthDate.getTime();
    }
    console.log('newly saved user', this.user);
    this.user = new User();
  }
}
