import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class TodoService {
  constructor(
    private http: HttpClient
  ) { }

  add(todo) {
    return this.http.post('...', todo).map(res => res);
  }

  getTodos() {
    return this.http.get('...').map(res => res);
  }

  delete(id) {
    return this.http.delete('...').map(res => res);
  }
}
