import { Component, HostListener, OnInit } from "@angular/core";
import { ScrollService } from "src/app/Service/ScrollService";
import { Observable } from "rxjs";
import { ComponentService } from "src/app/Service/ComponentService";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private scrollService: ScrollService,
    private componentService: ComponentService
  ) {}
  ngOnInit(): void {}
  // Returns an Observable that indicates the sticky status.
  get isSticky(): Observable<boolean> {
    return this.scrollService.isSticky$;
  }
  //  scrolls to the page element
  //  @param page => the id of the page element to scroll to.
  scrollTo(page: string) {
    const element = document.getElementById(page);
    if (page) {
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  //  Sets the component status to true => home, and tech-stack is displayed.
  renderComponentWhenClicked(): void {
    this.componentService.setComponentStatus(true);
  }
  // Listens to the window scroll event and handles the scroll behavior.
  // Sets the sticky status based on the scroll position.
  @HostListener("window:scroll", [])
  handleScroll() {
    const homeSectionHeight =
      document.getElementById("home")?.clientHeight || 0;
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const homeElement = document.getElementById("home");
    const headerHeight = document.getElementById("header")?.clientHeight || 0;
    const isSticky = scrollPosition >= homeSectionHeight;
    this.scrollService.setIsSticky(isSticky);
    if (homeElement) {
      homeElement.style.marginTop = isSticky ? headerHeight + "px" : "0";
    }
  }
}
