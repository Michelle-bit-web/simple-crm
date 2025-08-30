import { inject, Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, docData, updateDoc, deleteDoc } from '@angular/fire/firestore';
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

  updateUser(userId: string, user: User) {
    const userToUpdate = this.getSingleUserRef(userId);
    return updateDoc(userToUpdate, { ...user.toJSON() });
  }

  deleteUser(userId: string) {
    const userToDelete = this.getSingleUserRef(userId);
    return deleteDoc(userToDelete);
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
