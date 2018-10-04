import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {TodoService} from './todo.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent, TodoItemComponent, TodoFormComponent],
  providers: [TodoService]
})
export class FrontendModule { }
