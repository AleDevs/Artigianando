import { Injectable } from "@angular/core";
import { AngularFireObject } from "@angular/fire/compat/database";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User, UserPreference } from "../model/user";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userRef?: AngularFireObject<any>;

    constructor(
        public afs: AngularFirestore,
        private authService: AuthService
    ) {

    }

    async getById(uid: string): Promise<User> {
        return new Promise<User>(async (resolve, reject) => {
            let user = await this.afs.firestore.doc(`users/${uid}`).get();
            resolve(new User(user.data()));
        })
    }

    async update(user: User): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            await this.afs.firestore.doc(`users/${user.uid!}`).update(user.getData());
            resolve();
        })
    }

    async getMyUser(): Promise<User> {
        var uid = this.authService.userData!.uid;
        return new Promise<User>(async (resolve, reject) => {
            let user = await this.afs.firestore.doc(`users/${uid}`).get();
            resolve(new User(user.data()));
        })
    }

    async updateMyUser(user: User): Promise<void> {
        var uid = this.authService.userData!.uid;
        return new Promise<void>(async (resolve, reject) => {
            await this.afs.firestore.doc(`users/${uid}`).update(user.getData());
            resolve();
        })
    }

    async updateMyUserPreference(preference: UserPreference): Promise<void> {
        let user: User = new User();
        user.preferences = preference;
        return await this.updateMyUser(user);
    }

    async getAllUser(): Promise<any> {
        return new Promise<any>(async (resolve, reject) => {
            let users: any[] = [];
            this.afs
                .collection("users")
                .get()
                .subscribe((ss) => {
                    ss.docs.forEach((doc) => {
                        users.push(doc.data());
                    });
                });
            resolve(users);
        })
    }

    getEmployees() {
        return this.afs.collection('users').snapshotChanges();
      }
}