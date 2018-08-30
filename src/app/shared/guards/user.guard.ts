import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Router, Route } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {
  constructor(private userService: UserService,
  private router:Router){

  }
  //after can load (): ko funkcija atgriezis, vienu no 3 iespejamajiem variantiem 
  //Observable<boolean> generic, this case boolean
  canLoad(route:Route): Observable<boolean> | Promise<boolean> | boolean {
    return Observable.create((observer: Observer<boolean>)=>{
      this.userService.getUserProfile().subscribe(
        (response)=>{
         // this.router.navigate(['feed']);
         observer.next(false);
         observer.complete();
        return true;
        },
        (error)=>{
          observer.next(true); // go to registration
         observer.complete();
        });
    });
  }
}
