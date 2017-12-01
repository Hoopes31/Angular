import { Component, OnInit, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'App Component';
	constructor() {}
}
