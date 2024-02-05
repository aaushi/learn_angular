import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { NewListingsComponent } from './new-listings/new-listings.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { EditListingsComponent } from './edit-listings/edit-listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { ContactComponent } from './contact/contact.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [{path:'listings',component: ListingsComponent},
{path:'new-listings',component: NewListingsComponent},
{path:'my-listings',component: MyListingsComponent},
{path:'edit-listings/:id',component: EditListingsComponent},
{path:'listings-details/:id',component: ListingDetailsComponent},
{path:'contact/:id',component: ContactComponent},
{path:'',component: ParentComponent}];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
