import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { FormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesExComponent,
    PipePipe
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
