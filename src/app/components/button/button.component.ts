import { Component } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
	counter: number = 0;
	increment() {
		this.counter++;
	}
}
