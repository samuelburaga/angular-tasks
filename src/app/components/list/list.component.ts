import { Component } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	students: string[] = ["Valentina", "Elisei", "Sami", "Darian"];
	hidden: boolean = false;

	changeStatus() {
		if (this.hidden === true) {
			this.show();
		} else {
			this.hide();
		}
	}

	show() {
		this.hidden = false;
	}

	hide() {
		this.hidden = true;
	}
}
