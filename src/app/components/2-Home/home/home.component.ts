import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ScrollService } from "src/app/Service/ScrollService";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

declare var particlesJS: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("fade-in", [
      state("void", style({ opacity: 0 })),
      state("*", style({ opacity: 1 })),
      transition("void=>*", animate("1s ease-in")),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  isSticky = false;

  constructor(
    private scrollService: ScrollService,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {
    this.subscribeToIsSticky();
    this.addMarginToComponentBasedOnHeader();
    this.loadParticlesFromLibrary();
    this.setPlaybackRateOnVideoElement();
  }

  // Subscribe to isSticky$ from ScrollService to update sticky status
  private subscribeToIsSticky(): void {
    this.scrollService.isSticky$.subscribe((isSticky) => {
      this.isSticky = isSticky;
    });
  }

  // Adding margin-top of the element based on the header-height and sticky-state
  private addMarginToComponentBasedOnHeader(): void {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      const headerHeight = document.getElementById("header")?.clientHeight || 0;
      homeElement.style.marginTop = this.isSticky ? headerHeight + "px" : "0";
    }
  }

  // Load particles using particlesJS library
  private loadParticlesFromLibrary(): void {
    particlesJS.load("particles-js", "../../../../assets/particles.json", null);
  }

  // Adjust playback rate of the video element
  private setPlaybackRateOnVideoElement(): void {
    const videoElement = this.elementRef.nativeElement as HTMLVideoElement;
    videoElement.playbackRate = 0.8;
  }
}
