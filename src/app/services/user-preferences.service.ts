import { Injectable } from '@angular/core';
import { LengthUnit } from '../enums/length-unit.enum';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  preferredLengthUnit: LengthUnit = LengthUnit.KILOMETER;

  constructor() { }

  switchLengthUnit(){
    this.preferredLengthUnit = this.preferredLengthUnit === LengthUnit.KILOMETER ? LengthUnit.MILE : LengthUnit.KILOMETER;
  }

  getPreferredLengthUnit(): LengthUnit{
    return this.preferredLengthUnit;
  }
}
