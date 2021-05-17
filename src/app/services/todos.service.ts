import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITodo} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private readonly _client: HttpClient) {
  }

  public getTodos(): Observable<Array<ITodo>> {
    return this._client.get<Array<ITodo>>('assets/todos.json');
  }
}
