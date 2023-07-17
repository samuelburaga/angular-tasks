import { Component } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	students: string[] = ["Valentina", "Elisei", "Sami", "Darian"];
	isHidden: boolean = false;

	changeStatus() {
		this.isHidden = !this.isHidden;
	}
}
