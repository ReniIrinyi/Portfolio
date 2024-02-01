import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { ComponentService } from "./Service/ComponentService";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private componentService: ComponentService) {}
  blogComponentStatus: boolean | undefined;

  ngOnInit(): void {}
}
