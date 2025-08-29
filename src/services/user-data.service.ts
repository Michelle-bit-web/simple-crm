import {inject, Injectable} from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private firestore = inject(Firestore);

  constructor() { }

  getUserRef() {
    return collection(this.firestore, 'users');
  }

  addUser(newUser: User) {
    const usersCollection = this.getUserRef();
    return addDoc(usersCollection, newUser.toJSON());
  }

  getAllUser(): Observable<User[]> {
    const usersCollection = this.getUserRef();
    return collectionData(usersCollection, { idField: 'id' }) as Observable<User[]>;
  }
}
