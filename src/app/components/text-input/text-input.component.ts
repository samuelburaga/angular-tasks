import { Component } from "@angular/core";

@Component({
	selector: "app-text-input",
	templateUrl: "./text-input.component.html",
	styleUrls: ["./text-input.component.css"],
})
export class TextInputComponent {
	Name: string = "";
	message: string = "";
	isDisabled: boolean = true;

	enable() {
		this.isDisabled = false;
	}

	printMessage() {
		this.message = this.Name;
	}
}
