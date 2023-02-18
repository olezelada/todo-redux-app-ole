import {Action, createReducer, on} from '@ngrx/store';
import * as actions from "./todo.actions";
import {Todo} from "./models/todo.model";

export const estadoInicial: Todo[] = [
  new Todo('Conquistar el mundo'),
  new Todo('Reunir las gemas del infinito'),
  new Todo('Buscar a peter parker y los avengers'),
];

export const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.eliminarCompletados, state => state.filter(todo => !todo.completado)),
  on(actions.borrar, (state, {id}) =>
    state.filter(todo => todo.id !== id)
  ),
  on(actions.toggle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    })
  }),
  on(actions.toggleAll, (state, {completado}) => {
    return state.map(todo => {
      return {
        ...todo,
        completado: completado
      }
    })
  }),
);

export function todoReducer(state: Todo[] = estadoInicial, action: Action) {
  return _todoReducer(state, action)
}
