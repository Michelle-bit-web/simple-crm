import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA
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
  isEditing = false;

  constructor(
    public dialogService: MatDialog,
    private userDataService: UserDataService,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) { }


  onCancel(): void {
    this.dialogService.closeAll();
  }

  ngOnInit() {
    if (this.data) {
      this.isEditing = true;
      this.user = new User({ ...this.data });
      if (this.data.birthDate) {
        this.user.birthDate = new Date(this.data.birthDate);
      }
    }
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

  updateUser(userId: string) {
    console.log('Update user:', this.user);
  }

  deleteUser(userId: string) {
    console.log('Delete user:', this.user);
  }
}
