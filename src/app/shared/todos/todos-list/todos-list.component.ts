import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  allItem: any[] = [];

  constructor(
    private todosService: TodosService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getTodos();

    this.dataSource = new MatTableDataSource(this.allItem);
    this.dataSourceWithPageSize = new MatTableDataSource(this.allItem);
  }

  async getTodos() {
    this.allItem = await this.todosService.getAllUsers();
    // console.log(this.allItem);
  }

  displayedColumns: string[] = ['id', 'description', 'done'];
  dataSource = new MatTableDataSource();
  dataSourceWithPageSize = new MatTableDataSource();

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize!: MatPaginator;

  pageSizes = [10, 25, 50, 100];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }


}
