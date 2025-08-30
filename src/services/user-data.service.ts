import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private firestore = inject(Firestore);

  constructor() { }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(id: string) {
    return doc(this.firestore, `users/${id}`);
  }

  addUser(newUser: User) {
    const usersCollection = this.getUsersRef();
    return addDoc(usersCollection, newUser.toJSON());
  }

  getAllUser(): Observable<User[]> {
    const usersCollection = this.getUsersRef();
    return collectionData(usersCollection, { idField: 'id' }) as Observable<User[]>;
  }

  getUserById(id: string): Observable<User | undefined> {
    const userRef = this.getSingleUserRef(id);
    const observable = docData(userRef, { idField: 'id' }) as Observable<User | undefined>;
    return observable.pipe(
      map(data => {
        if(!data) return undefined;
        else return User.JsonToUser(data);
      })
    );
  }

  getDateFormat(date: number | Date): string {
    const dateFormat: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    };
    return new Date(date).toLocaleDateString('de-DE', dateFormat);
  }

}
