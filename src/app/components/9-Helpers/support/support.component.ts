import { Component } from "@angular/core";

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.scss"],
})
export class SupportComponent {
  supportStatus: any;
  toggleSupport(event: any) {
    const checkbox = event.target as HTMLInputElement;
    const checked = checkbox.checked;
    this.supportStatus = checked;
    this.ifClickedCloseTheContainer();
  }

  ifClickedCloseTheContainer() {
    if (this.supportStatus) {
      const supportContainer = document.querySelector(
        ".support-container"
      ) as HTMLElement;
      if (supportContainer) {
        supportContainer.style.display = "none";
      }
    }
  }
}
