import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  title = "Alpha online..."
  testData: string = "";

  // setup a variable to hold your observable data
  observable_now_local: any[] = [];
  
  constructor(private observable_service: ObservableService) { }

  // subscribe the observable_now_local variable to the data from our Observable
  ngOnInit() {
    this.observable_service.observableData.subscribe(
      (observableData) => { 
        this.observable_now_local = observableData; 
      }
    );
  }

}
