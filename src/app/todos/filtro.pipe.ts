import {Pipe, PipeTransform} from '@angular/core';
import {Todo} from "./models/todo.model";
import {filtrosValidos} from "../filtro/filtro.actions";

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  private readonly _COMPLETE: string = "completados"
  private readonly _PENDING: string = "pendientes"

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case this._COMPLETE:
        return todos.filter(todo => todo.completado);
      case this._PENDING:
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
