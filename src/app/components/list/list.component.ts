import { Component } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
})
export class ListComponent {
	students: string[] = ["Valentina", "Elisei", "Sami", "Darian"];
	isHidden: boolean = false;
	color: string = "black";

	changeStatus() {
		this.isHidden = !this.isHidden;
	}

	isMe(student: string) {
		return student === "Sami";
	}
}
