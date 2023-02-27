import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodosLayoutComponent } from './todos-layout/todos-layout.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodosLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TodosModule { }
