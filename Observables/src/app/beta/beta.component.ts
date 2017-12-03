import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../task.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  title = "Beta online..."
  observable_to_local: any[] = [];

  constructor(private observable_service: ObservableService) { }

  ngOnInit() {
    this.observable_service.observableData.subscribe(
      (observableData) => {
        this.observable_to_local = observableData;
      }
    )
  }

}
