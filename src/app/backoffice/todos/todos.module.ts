import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TodosModule { }
