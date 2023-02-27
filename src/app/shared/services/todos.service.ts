import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  allItems = [
    { id: 'adkasdkja', description: 'eat', done: true },
    { id: 'eruiuhsfn', description: 'sleep', done: false },
    { id: 'ocvknshjb', description: 'play', done: false },
    { id: 'ieofjklas', description: 'laugh', done: false },
  ];

  constructor(
    private firestore: AngularFirestore
    ) { }

  findLastCreatedTodos(limit: number) {
    return this.firestore.collection('todos', ref => ref.limit(limit)).snapshotChanges();
  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
      this.firestore.collection('todos').valueChanges({ idField: 'id' }).subscribe(docs => resolve(docs));
    })
}

  findAllTodos() {
    return this.firestore.collection('todos').get();
  }

  updateTodo(id: string, todo: {}) {
    return this.firestore.collection('todos').doc(id).set(todo, { merge: true });
  }

  createTodo(todo: {}) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('todos')
        .add(todo)
        .then(res => { }, err => reject(err));
    });
  }

  removeToDo(id: string) {
    return this.firestore.collection('todos').doc(id).delete();
  }
}
