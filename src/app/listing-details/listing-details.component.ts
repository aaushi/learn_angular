import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  panelOpenState = false;
  public plants=[{
    name:'pothos',
    type:'medium light'
  },
  {
    name:'petunia',
    type:'sun light'
  },
  {
    name:'succulents',
    type:'low light'
  }]
  constructor() { }

  ngOnInit(): void {
  }


}
