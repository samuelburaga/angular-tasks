import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { TextInputComponent } from "./components/text-input/text-input.component";

import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, ButtonComponent, TextInputComponent],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
