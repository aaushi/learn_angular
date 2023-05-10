import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { ViewchildExampleComponent } from './viewchild-example/viewchild-example.component';
import { ChildComponent } from './viewchild-example/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesExComponent,
    PipePipe,
    PromiseObservableComponent,
    ViewchildExampleComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
