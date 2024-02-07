import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { NewListingsComponent } from './new-listings/new-listings.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { EditListingsComponent } from './edit-listings/edit-listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';
import { UserEntryFormComponent } from './user-entry-form/user-entry-form.component';
import { RegistrationFormComponent } from './user-entry-form/registration-form/registration-form.component';
import { LoginFormComponent } from './user-entry-form/login-form/login-form.component';


const routes: Routes = [
  { path: 'listings', component: ListingsComponent },
  { path: 'new-listings', component: NewListingsComponent },
  { path: 'my-listings', component: MyListingsComponent },
  { path: 'edit-listings/:id', component: EditListingsComponent },
  { path: 'listings-details/:id', component: ListingDetailsComponent },
  { path: 'contact/:id', component: ContactComponent },
  { path: 'userAuthForm', component: UserEntryFormComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
