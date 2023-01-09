import { Component, OnInit } from '@angular/core';
import { Trace } from 'src/app/model/trace.model';
import { TraceService } from 'src/app/services/trace.service';
import { Option } from 'src/app/model/option.model';
import { UserPreferencesService } from 'src/app/services/user-preferences.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  private traces: Trace[] = [];

  options: Option[] =  [{ label: 'Speed',value: "Speed"},{ label: 'Position',value: "Position"}]

  selectedInformation: string = "";

  constructor(
    private traceService: TraceService,
    ){}

  ngOnInit(){
    // call trace service to get default data ( un-filtered ) ?
  }

  updateSelected($event:string){
    console.log($event);
    this.selectedInformation = $event;
  }

}
