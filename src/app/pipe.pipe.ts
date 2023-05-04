import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  pure:false
})
export class PipePipe implements PipeTransform {

  transform(value: any, filteredString:string): unknown {
    //return null;
    const filteredUsers=[];
    for(let user of value){
      if(user['name']===filteredString)
      filteredUsers.push(user)
    }
    return filteredUsers;
  }

}
