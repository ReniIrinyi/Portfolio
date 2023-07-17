import { Component } from "@angular/core";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-techstack",
  templateUrl: "./techstack.component.html",
  styleUrls: ["./techstack.component.scss"],
})
export class TechStackComponent {
  faDatabase = faDatabase;
  faScrewdriverWrench = faScrewdriverWrench;
  faCode = faCode;
  faMagicWandSparkles = faMagicWandSparkles;
}
