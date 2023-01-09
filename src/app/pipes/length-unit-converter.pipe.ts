import { Pipe, PipeTransform } from '@angular/core';
import { LengthUnit } from '../enums/length-unit.enum';
import { UserPreferencesService } from '../services/user-preferences.service';

@Pipe({ name: 'lengthUnitConverter' })
export class LengthUnitConverter implements PipeTransform {

    constructor(private userPreferencesService: UserPreferencesService){
        
    }

    transform(length:number) {
        return this.userPreferencesService.getPreferredLengthUnit() === LengthUnit.KILOMETER ? "No conversion from kilometer" : "This has been converted to kilometers";
    }
  }