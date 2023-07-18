import { Component } from "@angular/core";

@Component({
	selector: "app-tasks",
	templateUrl: "./tasks.component.html",
	styleUrls: ["./tasks.component.css"],
})
export class TasksComponent {
	tasks: string[] = ["Buy milk", "Solve the Rubiks'cube", "Take a break"];
}
