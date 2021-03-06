import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Todo} from './todo';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class TodoService {

    url = 'http://192.168.99.100:2403/todos';

    sTodos: Subject<Todo[]> = new Subject<Todo[]>();
    sTodo$ = this.sTodos.asObservable();

    constructor(private http: Http) {
    }


    getTodos() {
        this.http.get(this.url).subscribe( resp => {
            let data = resp.json();
        });
        return this.sTodo$;
    }

    getTodo(id: string) {
        return this.http.get(this.url + '/' + id);
    }

    saveTodo(todo: Todo) {
        return this.http.post(this.url, todo);
    }

    deleteTodo(todo: Todo) {
        return this.http.delete(this.url + '/' + todo.id);
    }
}
