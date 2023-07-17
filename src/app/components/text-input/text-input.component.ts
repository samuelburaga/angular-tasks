import { Component } from "@angular/core";

@Component({
	selector: "app-text-input",
	templateUrl: "./text-input.component.html",
	styleUrls: ["./text-input.component.css"],
})
export class TextInputComponent {
	Name: string = "";
	message: string = "Greetings,";

	enable() {
		(<HTMLInputElement>document.getElementById("input")).disabled = false;
	}

	printMessage() {
		this.Name = (<HTMLInputElement>document.getElementById("input")).value;
		this.message = "Greetings, " + this.Name;
	}
}
