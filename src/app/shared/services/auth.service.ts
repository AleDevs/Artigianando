import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { UserManager } from '../manager/users.manager';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  //default??
  userData?: firebase.default.User | null;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.init();

  }

  isLoggedIn(): boolean {
    return this.userData != undefined;
  }

  init(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe(async (user) => {
        this.userData = user;
        resolve(true);
      });
    });
  }

  // Login with email/password
  login(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then((result) => {
        var sub = this.afAuth.user.subscribe((user) => {
          if (user) {
            this.userData = user;
            sub.unsubscribe();
            resolve(true);
          }
        });
      }).catch((error) => {
        reject(error);
      });
    });
  }

  //register
  register(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `users/${result.user!.uid}`
        );
        const userData: User = {
          uid: result.user!.uid,
          email: result.user!.email!,
        };
        return userRef.set(userData, {
          merge: true,
        });
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // Logout
  logout() {
    return this.afAuth.signOut().then(() => {
      this.afAuth.authState.subscribe((user) => {
      });
      this.router.navigate(['login']);
    })
      .catch((error) => {
        window.alert(error.message);
      });
    ;
  }

}
