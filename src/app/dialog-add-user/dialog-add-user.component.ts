import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../services/user-data.service';


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
    MatDatepickerModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DialogAddUserComponent {
  user: User = new User;
  loading = false;

  constructor(public dialogService: MatDialog, private userDataService: UserDataService) { }


  onCancel(): void {
    this.dialogService.closeAll();
  }

  saveUser(): void {
    this.loading = true;
    if (this.user.birthDate instanceof Date) {
      this.user.birthDate = this.user.birthDate.getTime();
    }
    this.userDataService.addUser(this.user).then((result: any) => {
      this.user = new User();
      this.loading = false;
    });
  }
}
