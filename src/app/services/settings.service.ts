import { Injectable } from '@angular/core';

import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }
  constructor() { 
    //check in local storage for settings
    if(localStorage.getItem('settings') != null) {
      //if local storage has settings, assign those settings
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings(): Settings {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    //local storage can only hold strings, when we store it we stringify it with JSON.stringify,
    //when we retrieve it we turn it back into a JSON object with JSON.parse
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
