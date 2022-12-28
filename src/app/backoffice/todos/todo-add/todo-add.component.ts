import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private todoService: TodosService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required])
    })
  }

  onSubmit() {
    if(!this.form?.valid){
      return;
    }
    this.todoService.add(this.form.value);
  }

}
