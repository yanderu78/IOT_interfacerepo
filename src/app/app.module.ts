import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSnackBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
