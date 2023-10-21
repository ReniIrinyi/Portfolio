import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ComponentService } from "./Service/ComponentService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private componentService: ComponentService
  ) {}
  componentStatus: boolean | undefined;
  blogComponentStatus: boolean | undefined;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //subscribe to the componentStatus$ and display/hide the home and the tech-stack component
        this.componentService.componentStatus$.subscribe((status) => {
          //need for the change detection
          setTimeout(() => {
            this.componentStatus = status;
          });
        });
      }
    });
  }
}
