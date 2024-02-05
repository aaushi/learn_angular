import { Component, OnInit } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.scss']
})
export class MyListingsComponent implements OnInit {

  constructor(private serv:AllServiceService) { }
  plantsType:string[];
  ngOnInit(): void {
    this.serv.getPlantstype();
  }

}
