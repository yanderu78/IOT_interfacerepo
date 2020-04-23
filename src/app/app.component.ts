import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _snackBar: MatSnackBar) {}
  title = "DefaultUser";
  temp = 0;

  SendTemp(temp) {
    this._snackBar.open(
      "selected temp (set to:" +
        document.getElementById("myNumber").value +
        "°) has been sent",
      "OK",
      {
        duration: 2000
      }
    );
  }

  NotifyBlock(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
