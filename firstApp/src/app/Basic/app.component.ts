import { Component } from '@angular/core';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title: string;
	user: User;
    users: Array<User> = [];
    message: string;
    states: Array<any> = [
        {"Alaska": 1},
        {"Alabama":2}
    ]

	ngOnInit() {
		this.title = 'Registration Form';
		this.user = new User();
	}
	onSubmit() {
		this.users.push(this.user);
		this.user = new User();
	}
}