import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  collectionName: string = 'todos';

  constructor(
    private afs: AngularFirestore,
    private _snackBar: MatSnackBar
  ) { }

  getAll(showAll: boolean) {
    if (showAll == false) {
      return this.afs.collection(this.collectionName, ref => ref.where('done', '==', showAll)).valueChanges();
    } else {
      return this.afs.collection(this.collectionName).valueChanges();
    }
  }

  add(formValues: Todo) {
    let id = this.afs.createId();

    this.afs.collection(this.collectionName).doc(id).set({
      id: id,
      title: formValues?.title,
      done: false
    }).then(() => {
      this.openSnackBar('Todo created', 'ok');
    }).catch((e: Error) => {
      this.openSnackBar('error: ' + e, 'ok');
    });
  }

  delete(id: string) {
    this.afs.collection(this.collectionName).doc(id).delete().then(res => {
      console.log(res);
    });
  }

  update(id: string, done: boolean) {
    console.log('id', id);
    console.log('done', done);

    this.afs.collection(this.collectionName).doc(id).update({
      done: done
    }).then(() => {
      this.openSnackBar('Todo updated', 'ok');
    }).catch((e: any) => {
      this.openSnackBar('error: ' + e, 'ok');
    });
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action);
  }

  getTodoCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.afs.collection(this.collectionName, ref => ref.where('done', '==', false)).get().subscribe({
        next(snapshot) {
          resolve(snapshot.docs.length);
        },
        error(msg) {
          console.log('Error Getting Location: ', msg);
        }
      });
    });

  }
}
