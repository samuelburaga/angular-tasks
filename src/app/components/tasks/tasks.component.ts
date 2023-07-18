import { Component, Input } from "@angular/core";

@Component({
	selector: "app-tasks",
	templateUrl: "./tasks.component.html",
	styleUrls: ["./tasks.component.css"],
})
export class TasksComponent {
	tasks: string[] = ["Buy milk", "Solve the Rubiks'cube", "Take a break"];

	deleteTask(event: any) {
		let index = event.indexOf(event);
		this.tasks.splice(index, 1);
	}
}
