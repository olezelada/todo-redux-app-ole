import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  public completado: boolean;

  constructor(private store: Store<AppState>) {
    this.completado = false;
  }

  ngOnInit(): void {
  }

  public toggleAll(): void {
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(actions.toggleAll({completado: this.completado}));
  }

}
