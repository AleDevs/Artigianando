import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  displayedColumns: string[] = ['done', 'title', 'delete', 'edit'];
  dataSource: any[] = [];
  @ViewChild('table') table?: MatTable<Todo>;
  showAll: boolean = false;

  constructor(
    private _todoService: TodosService,
  ) { }

  ngOnInit(): void {
    this.getAll(this.showAll);
  }

  dropTable(event: CdkDragDrop<Todo[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table?.renderRows();
  }

  reloadList(e: any){
    this.showAll = e.checked;
    this.getAll(this.showAll);
  }

  getAll(showAll: boolean) {
    this._todoService.getAll(showAll).subscribe((res: any[]) => {
      this.dataSource = res;
    })
  }

  delete(id: string) {
    if (confirm('Sei sicuro di voler cancellare il ToDo?')) {
      this._todoService.delete(id);
    }
  }
  
  edit(id: string) {
    console.log('edit:', id);
  }

  changeStatus(id: string, done: boolean) {
    done = !done;
    this._todoService.update(id, done);
  }
}
