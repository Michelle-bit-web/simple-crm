import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { UserDataService } from '../../services/user-data.service';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [
     MatCardModule,
     MatTabsModule,
     CommonModule,
     AsyncPipe,
     NgIf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  user$!: Observable<User | undefined>;

  constructor(private route: ActivatedRoute, public userService: UserDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.user$ = this.userService.getUserById(id);
      }
    });
  }
}
