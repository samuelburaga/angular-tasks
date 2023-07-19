import { Component, Input } from "@angular/core";
import { Task } from "./task";

@Component({
	selector: "app-tasks",
	templateUrl: "./tasks.component.html",
	styleUrls: ["./tasks.component.css"],
})
export class TasksComponent {
	taskList: Task[] = [
		{ id: 1, text: "Buy milk" },
		{ id: 2, text: "Solve the Rubik's cube" },
		{ id: 3, text: "Take a break" },
	];

	deleteTask(event: any) {
		const index: number = this.taskList.findIndex((task) => task.id === event);
		this.taskList.splice(index, 1);
	}
}
