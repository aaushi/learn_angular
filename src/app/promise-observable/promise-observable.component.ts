import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.scss']
})
export class PromiseObservableComponent implements OnInit,OnDestroy {

   subscription:Subscription;
  constructor() { }

  ngOnInit(): void {
//promise

const pr=new Promise(function(resolve,reject){
  let x=1;
  if(x==1){
    resolve('promise resolved');
  }
  else{
    reject('promise rejected');
  }
});

pr.then(function(name){
  console.log(name);
  if(name==='promise resolved'){
    console.log('after promise');
  }
 
})

//************************Observable************************** */

const observable=new Observable((observer)=>{
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.complete();
})

this.subscription=observable.subscribe(res=>console.log(res));
observable.pipe(filter(res=>res==='1')).subscribe(res=>console.log(res));
observable.pipe(filter(res=>res==='1'),map(res=>res+'x')).subscribe(res=>console.log(res));
observable

  }
ngOnDestroy(){
this.subscription.unsubscribe();
}
}
