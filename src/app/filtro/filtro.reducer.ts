import {Action, createReducer, on} from '@ngrx/store';
import * as actions from "./filtro.actions";
import {filtrosValidos} from "./filtro.actions";
//import {filtrosValidos} from "./filtro.actions";

export const initialState: actions.filtrosValidos = 'todos';

const _filtroReducer = createReducer<actions.filtrosValidos, Action>(
  initialState,
  on(actions.setFiltro, (state, { filtro }) => filtro)
)

export function filtroReducer(state: filtrosValidos = initialState, action: Action) {
  return _filtroReducer(state, action);
}
