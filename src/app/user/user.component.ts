import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { UserDataService } from '../../services/user-data.service';
import { User } from '../../models/user.class';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  position: TooltipPosition = 'above';
  userList: User[] = [];
  private sub?: Subscription;


  constructor(public dialogService: MatDialog, private userDataService: UserDataService) { }

  ngOnInit() {
    this.sub = this.userDataService.getAllUser().subscribe(users => {
      this.userList = users;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  openDialog() {
    this.dialogService.open(DialogAddUserComponent);
  }

  getDateFormat(date: number | Date): string {
    return this.userDataService.getDateFormat(date);
  }
}
