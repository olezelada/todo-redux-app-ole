import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../../filtro/filtro.actions";
import {eliminarCompletados} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: actions.filtrosValidos = "todos";
  public filtros: actions.filtrosValidos[] = ["todos","completados","pendientes"];

  public pendientes: number;

  constructor(private store: Store<AppState>) {
    this.pendientes = 0;
  }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado).length;
    });
  }

  public cambiarFiltro( filtro: actions.filtrosValidos): void{
    this.store.dispatch(actions.setFiltro({filtro}));
  }

  public eliminarCompletados(): void{
    this.store.dispatch(eliminarCompletados());
  }

}
