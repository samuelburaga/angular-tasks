import { Component } from "@angular/core";

@Component({
	selector: "app-text-input",
	templateUrl: "./text-input.component.html",
})
export class TextInputComponent {
	message: string = "";
	isDisabled: boolean = true;

	enable() {
		this.isDisabled = false;
	}

	disable() {
		this.isDisabled = true;
		this.message = "";
	}
}
