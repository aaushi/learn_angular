import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipePipe } from './pipe.pipe';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { ViewchildExampleComponent } from './viewchild-example/viewchild-example.component';
import { ChildComponent } from './viewchild-example/child/child.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeadersInterceptor } from './headers.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesExComponent,
    PipePipe,
    PromiseObservableComponent,
    ViewchildExampleComponent,
    ChildComponent,
    MyFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
