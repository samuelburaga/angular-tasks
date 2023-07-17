import { Component } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListComponent {
	list: string[] = ["Valentina", "Elisei", "Sami", "Darian"];
}
