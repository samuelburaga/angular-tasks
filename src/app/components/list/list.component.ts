import { Component } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	students: string[] = [];
	status: string = "Show";
	changeStatus() {
		if (this.status == "Show") this.show();
		else this.hide();
	}
	show() {
		this.status = "Hide";
		this.students = ["Valentina", "Elisei", "Sami", "Darian"];
	}
	hide() {
		this.status = "Show";
		this.students = [];
	}
}
