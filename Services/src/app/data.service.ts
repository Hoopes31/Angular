import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	// Add some data
	data: Array<number> = [ 1, 2, 3, 4 ];

	constructor() { }

	// Add some methods
	getData(): Array<number> {
		return this.data;
	}

	addData(num: number): void {
		// notice data is stored in the service!
		this.data.push(num);
	}

}
