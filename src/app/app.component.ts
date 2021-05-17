import {Component, OnInit} from '@angular/core';
import {ITodo} from './interfaces';
import {TodosService} from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dinamicka-test';
  todos: Array<ITodo> = [];

  constructor(private readonly _client: TodosService) {
  }

  ngOnInit(): void {
    this._client.getTodos()
      .subscribe((todos: Array<ITodo>) => this.todos = todos);
  }

  public delete(id: string): void {
    const index = this.todos.findIndex((todo: ITodo): boolean => todo.id === id);
    this.todos.splice(index, 1);
  }

  public add(text: string): void {
    let index = 0;
    let id = 0;
    do {
      id = Math.floor(Math.random() * 100);
      index = this.todos.findIndex((todo: ITodo): boolean => todo.id === `${id}`);
    } while (index !== -1);
    const todo: ITodo = {
      id: `{$id}`,
      text
    };
    this.todos.push(todo);
  }
}
