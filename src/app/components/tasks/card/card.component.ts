import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Task } from "../task";
@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input()
	task: Task = { id: -1, text: "" };

	@Output()
	delete: EventEmitter<number> = new EventEmitter<number>();

	handleClickDelete() {
		this.delete.emit(this.task.id);
	}
}
