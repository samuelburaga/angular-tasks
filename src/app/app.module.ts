import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { TextInputComponent } from "./components/text-input/text-input.component";

import { FormsModule } from "@angular/forms";
import { ListComponent } from "./components/list/list.component";
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
	declarations: [AppComponent, ButtonComponent, TextInputComponent, ListComponent, TasksComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
