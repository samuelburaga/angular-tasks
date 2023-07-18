import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input()
	text: string = "";

	@Output()
	delete: EventEmitter<string> = new EventEmitter<string>();

	deleteTask() {
		this.delete.emit(this.text);
	}
}
