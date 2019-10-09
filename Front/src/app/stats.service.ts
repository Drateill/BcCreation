import { Injectable } from '@angular/core';
import { getLocalePluralCase } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }
  getBaseStatHuman(){
    return [
      {"name": "WS", "value": 25},
      {"name": "BS", "value": 25},
      {"name": "S", "value": 25},
      {"name": "T", "value": 25},
      {"name": "Ag", "value": 25},
      {"name": "Int", "value": 25},
      {"name": "WP", "value": 25},
      {"name": "Fel", "value": 25},
    ]
  }
  getArchetypeHuman(){
    return[
      {"name": "Apostate", "value": "Apostate", "wound" : 9},
      {"name": "Heretek", "value": "Heretek", "wound" : 12},
      {"name": "Renegade", "value": "Renegade", "wound" : 10},
      {"name": "Psyker", "value": "Psyker", "wound" : 8}
    ]
  }

  getBaseStatSM(){
    return [
      {"name": "WS", "value" : 30},
      {"name": "BS", "value" : 30},
      {"name": "S", "value" : 30},
      {"name": "T", "value" : 30},
      {"name": "Ag", "value" : 30},
      {"name": "Int", "value" : 30},
      {"name": "WP", "value" : 30},
      {"name": "Fel", "value" : 30},
    ]
  }
  getArchetypeSM(){
    return[
      {"name": "Champion", "value": "Champion", "wound" : 15},
      {"name": "Chosen", "value": "Chosen", "wound" : 16},
      {"name": "Forsaken", "value": "Forsaken", "wound" : 15},
      {"name": "Sorcerer", "value": "Sorcer", "wound" : 15}
    ]
  }
  getRace(){
    return [
        {"name" : "Disciple of Chaos"},
        {"name" : "Space Marine"}

    ]

  }


}
