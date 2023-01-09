import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPickerComponent } from './custom-picker/custom-picker.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { FormsModule } from '@angular/forms';
import { LengthUnitConverter } from '../pipes/length-unit-converter.pipe';


@NgModule({
  declarations: [
    CustomPickerComponent,
    ResultsTableComponent,
    LengthUnitConverter
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomPickerComponent,
    ResultsTableComponent,
    LengthUnitConverter
  ]
})
export class SharedModule { }
