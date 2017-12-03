import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ObservableService {
  // Create a new instance of the BehaviorSubject
  observableData: BehaviorSubject<any[]> = new BehaviorSubject([]);

  // Inject http module to 
  constructor(private _http: HttpClient) { }

  // Create an update function that passes data to the Observables.next method
  updatedData(newData: any): void {
    const tempData = this.observableData.getValue();
    tempData.push(newData)
    this.observableData.next(newData);
  }
}
