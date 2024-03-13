import { Component } from "@angular/core";

declare const particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor() {
    particlesJS.load("particles-js", "../../../../assets/particles.json", null);
  }
}
