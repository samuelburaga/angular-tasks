import { Component } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	students: string[] = ["Valentina", "Elisei", "Sami", "Darian"];
	isVisible: boolean = true;

	changeStatus() {
		this.isVisible = !this.isVisible;
	}
}
