import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user-details',
  imports: [
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    AsyncPipe,
    NgIf,
    MatDialogModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})

export class UserDetailsComponent {
  user$!: Observable<User | undefined>;

  constructor(private route: ActivatedRoute, public userService: UserDataService, public dialogService: MatDialog) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.user$ = this.userService.getUserById(id);
      }
    });
  }

  openDialog() {
    this.user$.subscribe(user => {
      if (user) {
        this.dialogService.open(DialogAddUserComponent, {
          data: user
        });
      }
    });
  }
}
