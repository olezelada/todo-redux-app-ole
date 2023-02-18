import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import * as actions from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;
  public chkCompletado!: FormControl;
  public txtInput!: FormControl
  public editando: boolean;

  constructor(private store: Store<AppState>) {
    this.editando = false;
  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}))
      console.log(valor)
    });
  }

  public editar(): void {
    this.editando = true;

    this.txtInput.setValue(this.todo.texto);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 100);
  }

  public borrar(): void {
    this.store.dispatch(actions.borrar({id: this.todo.id}));
  }

  public terminarEdicion(): void {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }

}
