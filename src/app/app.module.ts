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
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
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
    ListingsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule
    //MatToolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
