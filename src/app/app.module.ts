import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms'
// Ngrx
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppComponent} from './app.component';
import {TodoModule} from "./todos/todo.module";
import {FooterComponent} from './footer/footer.component';
import {appReducers} from "./app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducers),

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode()
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
