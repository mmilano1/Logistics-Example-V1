import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/model/option.model';

@Component({
  selector: 'app-custom-picker',
  templateUrl: './custom-picker.component.html',
  styleUrls: ['./custom-picker.component.scss']
})
export class CustomPickerComponent {

  @Input() options: Option[] = [];
  @Input() label: string = "";
  @Output() selectedItem = new EventEmitter<string>();
  selectedValue: string = "";

  show() {
    console.log(this.selectedValue);
    this.selectedItem.emit(this.selectedValue);
  }

}
