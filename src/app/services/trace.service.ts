import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Trace } from '../model/trace.model';

@Injectable({
  providedIn: 'root'
})
export class TraceService {

  constructor() { }

  init(){
    
  }

  getTraces(startDate: string, endDate?:string): Trace[] {
    return [];
  }


}
