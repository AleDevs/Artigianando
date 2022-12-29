import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Portfolio } from './portfolio';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  collectionName: string = 'portfolios';

  constructor(
    private _afs: AngularFirestore,
    private _snackBar: MatSnackBar
  ) { }

  getAll() {
    return this._afs.collection(this.collectionName).valueChanges();
  }

  add(formValues: Portfolio) {
    let id = this._afs.createId();

    this._afs.collection(this.collectionName).doc(id).set({
      id: id,
      title: formValues?.title,
      description: formValues?.description,
    }).then(() => {
      this.openSnackBar('Portfolio created', 'ok');
    }).catch((e: any) => {
      this.openSnackBar('error: ' + e, 'ok');
    });
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action);
  }
}
