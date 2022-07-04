import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root',
})
export class UserManager {

    constructor(
        public afs: AngularFirestore,
    ) {

    }

    async getMyUserById(uid: string): Promise<User> {
        console.log("uid", uid);
        
        return new Promise<User>(()=>{
            this.afs.firestore.doc(`users/${uid}`).get().then((user)=>{
                return user.data();
            });
        })
    }
}