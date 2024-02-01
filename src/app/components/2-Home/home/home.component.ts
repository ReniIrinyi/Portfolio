import { Component, OnInit, ElementRef } from "@angular/core";

declare const particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    console.log("home init");
    this.loadParticlesFromLibrary();
  }

  // Load particles using particlesJS library
  private loadParticlesFromLibrary(): void {
    particlesJS.load("particles-js", "../../../../assets/particles.json", null);
  }
}
