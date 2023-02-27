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
    private afs: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }

  getAll() {
    return this.afs.collection(this.collectionName).valueChanges();
  }

  getPortfolioById(portfolioId: string) {
    return this.afs.collection(this.collectionName).doc(portfolioId).valueChanges().subscribe(item => {
      return item; 
    });
  }

  add(formValues: Portfolio) {
    let id = this.afs.createId();

    this.afs.collection(this.collectionName).doc(id).set({
      id: id,
      title: formValues?.title,
      description: formValues?.description,
    }).then(() => {
      this.openSnackBar('Portfolio created', 'ok');
    }).catch((e: Error) => {
      this.openSnackBar('error: ' + e, 'ok');
    });
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action);
  }
}
