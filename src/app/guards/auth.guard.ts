import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth
    ) { }
        //router guard, attach canActivate to
        //whatever route we want to guard
    canActivate(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(auth => {
            //if not logged in, return to login page
            if(!auth) {
                this.router.navigate(['/login']);
                return false;
            } else {
                //if logged in navigate to route
                return true;
            }
        }));
    }
}