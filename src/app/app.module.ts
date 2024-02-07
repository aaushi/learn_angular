import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { NewListingsComponent } from './new-listings/new-listings.component';
import { EditListingsComponent } from './edit-listings/edit-listings.component';
import { ContactComponent } from './contact/contact.component';
import { MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UxpipePipe } from './pipes/uxpipe.pipe';  
import { ManualPipe } from './pipes/manualpipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { ListingsComponent } from './listings/listings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { ViewchildExampleComponent } from './viewchild-example/viewchild-example.component';
import { MyFormComponent } from './my-form/my-form.component';
import { PromiseObservableComponent } from './promise-observable/promise-observable.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { ChildComponent } from './viewchild-example/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildrenOutletContexts, RouterModule } from '@angular/router';
import { UserEntryFormComponent } from './user-entry-form/user-entry-form.component';
import { RegistrationFormComponent } from './user-entry-form/registration-form/registration-form.component';
import { LoginFormComponent } from './user-entry-form/login-form/login-form.component';
import { WelcomePageComponent } from './user-entry-form/welcome-page/welcome-page.component';

//import {MatToolbar} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListingDetailsComponent,
    MyListingsComponent,
    NewListingsComponent,
    EditListingsComponent,
    ContactComponent,
    UxpipePipe,
    ManualPipe,
    ParentComponent,
    Child1Component,
    ListingsComponent,
    ViewchildExampleComponent,
    MyFormComponent,
    PromiseObservableComponent,
    PipesExComponent,
    ChildComponent,

    Child1Component,

    UserEntryFormComponent,

    RegistrationFormComponent,

    LoginFormComponent,
      WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    //MatToolbar
  ],
  providers: [ChildrenOutletContexts],
  bootstrap: [AppComponent],
})
export class AppModule {}
