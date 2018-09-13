import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { SettingsService } from '../services/settings.service';


@Injectable()
export class RegisterGuard implements CanActivate {
    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) { }
        //router guard, attach canActivate to
        //whatever route we want to guard
    canActivate(): boolean {
        //If not registered, allow registration
        if(this.settingsService.getSettings().allowRegistration) {
            return true;
            //else, navigate to login page
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}