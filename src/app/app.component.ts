import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnangular';
  users;


  constructor(private UserService:UsersService){}

  ngOnInit(){
    this.UserService.getAllUsers().subscribe(res=>{this.users=res;});
  }

}
