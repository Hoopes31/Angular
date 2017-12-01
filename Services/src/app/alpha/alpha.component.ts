import { Component, OnInit } from '@angular/core';

// import the DataService
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

	// Create a variable to hold injected data
	data: Array<number> = [];
	new_number: number;

	// Inject the service into our Components constructor
	constructor(private _dataService: DataService) { }

	ngOnInit() {
		this.data = this._dataService.getData();
	}

	addOne() {
		this._dataService.addData(1);
	}
	addNumber() {
		this._dataService.addData(this.new_number);
	}
}
