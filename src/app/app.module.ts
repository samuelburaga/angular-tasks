import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./components/button/button.component";
import { TextInputComponent } from './components/text-input/text-input.component';
@NgModule({
	declarations: [AppComponent, ButtonComponent, TextInputComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
