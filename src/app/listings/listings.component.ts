import { Component, OnInit } from '@angular/core';
import { fakedata } from '../fakedata';
import { Listings } from '../types';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  plantsList:Listings[];
  constructor() { }


  ngOnInit(): void {
    this.plantsList=fakedata;
  }

}
